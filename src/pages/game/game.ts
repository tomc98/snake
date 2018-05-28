import { Component, ViewChild } from '@angular/core';
import {Platform, ViewController} from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { LostPage } from '../lost/lost';

// import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  @ViewChild('myCanvas') myCanvas;
  @ViewChild('pfCanvas') pfCanvas;

  //globally used values
  screenWidth= window.innerWidth;
  screenHeight= window.innerHeight;
  pfWidth= window.innerWidth/10;
  pfHeight= window.innerHeight/10;
  points = 0;
  ctx: any;
  pfCtx: any;

  mouse = {x: 0, y: 0};
  down = false;

  fruit = {x: window.innerWidth/5, y: innerHeight/5, color: 'red', size: 20};

  botColour = "#555555";
  lives = 3;
  theInt : any;
  loop = 0;
  lastUpdate = 0;

  fruitColorDegreeGap = 15;
  backgroundColor = {h: 257, s: 0.22, v: 0.84};
  falshColor = {h: 257, s: 0.22, v: 0.84};
  flashIntensity: number = 0;

  // all snakes including bots if any
  snakes = [
    [
      {x: window.innerWidth/2, y: window.innerHeight/2}, // this is the target location (mouse) and is not drawn
      {x: window.innerWidth/2, y: window.innerHeight/2}, 
      {x: window.innerWidth/2, y: window.innerHeight/2}
    ]
  ];
  
  enableComputer:boolean = false;
  computerDifficulty:number;

  constructor(public navCtrl: NavController, /*private nativeAudio: NativeAudio,*/ public plt: Platform, public navParams: NavParams) {

    var parameters = navParams.data

    this.enableComputer = parameters.enableComputer;
    this.computerDifficulty = parameters.computerDifficulty;

    console.log("enableBots: " + this.enableComputer);
    console.log("botCount: " + this.computerDifficulty);
  }

  //executes once all views have been initialised 
  ngAfterViewInit() {

    //init canvas
    this.ctx = this.myCanvas.nativeElement.getContext("2d");
    this.pfCtx = this.pfCanvas.nativeElement.getContext("2d");

    //init mouse/touch inputs
    let hammer = new window['Hammer'](this.myCanvas.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL});
    hammer.on('pan', (event) => {
      //process pan event
      this.panUpdate(event.center.x, event.center.y);
    });

    //setup refresh interval
    this.theInt = setInterval(() => {this.update();}, 1000/60);

    //reset game to start
    this.setupGameState();
    this.loadSound();
  }

  //load sounds
  //TODO implement
  loadSound(){
    //if (this.plt.is('android')) {
    //    this.nativeAudio.preloadSimple('pop', '../../assets/sounds/pop.mp3').then();
    //    this.nativeAudio.preloadSimple('1bite', '../../assets/sounds/1bite.mp3').then();
    //    this.nativeAudio.preloadSimple('2bite', '../../assets/sounds/2bite.mp3').then();
    //    this.nativeAudio.preloadSimple('3bite', '../../assets/sounds/3bite.mp3').then();
    //}
  }

  //reset the games state and values
  setupGameState(){
    this.points = 0;
    this.makeFruit();
    this.lives = 3;

    if(this.enableComputer){
      var x = Math.random() * window.innerWidth;
      var y = Math.random() * window.innerHeight;

      this.snakes.push(
        [
          {x: x, y: y}, // target for snake, not displayed
          {x: x, y: y}, 
          {x: x, y: y}
        ]
      );
    }
  }

  update(){
    this.loop ++;
    //var date = new Date();
    //var time = date.getTime();
    //console.log(time - this.lastUpdate);
    //this.lastUpdate = time;

    this.render();

    if(this.checkIntercept())
      this.lives = 0;

    if(this.lives == 0){
      //if player died

      //stop update interval
      clearInterval(this.theInt);

      //navigate to lost page
      this.navCtrl.push(LostPage, this.points);
      
    }else{
      this.updateBotTargets();

      for(var s = 0; s < this.snakes.length; s++){

        for(var i = 1; i < this.snakes[s].length; i++){

          var speed = s > 0 && i == 1 ? this.computerDifficulty / 2 + 5 : 10;

          //get and update next position of each snake
          var nextPos = this.getNextPosition(this.snakes[s][i-1].x, this.snakes[s][i-1].y, this.snakes[s][i].x, this.snakes[s][i].y, speed, s > 0 && i == 1);
          
          this.snakes[s][i].x = nextPos.x;
          this.snakes[s][i].y = nextPos.y;

        }
      }

      this.updateFruit();

      //shrink fruit item and draw it
      this.shrinkFruit();
    }
  }

  // update targets for bots
  updateBotTargets(){
    //console.log("updateBotTargets()");

    //this.drawObsticaleMap();
    var pathPoints = this.getPathPoints();

    // for(let point of pathPoints){
    //   this.drawCircle(point.x, point.y, 2, "#888888");

    //   this.ctx.strokeWidth = 1;
    //   this.ctx.strokeStyle = '#888888';
    //   this.ctx.beginPath();
    //   this.ctx.moveTo(point.x, point.y);
    //   this.ctx.lineTo(point.sx, point.sy);
    //   this.ctx.stroke();
    // }


    for(var s = 1; s < this.snakes.length; s++){
      //console.log("  for snake " + s);

      //Do A* path search using path points and avoid passing through snakes
      var head = this.snakes[s][1];
      var target = {x: this.fruit.x, y: this.fruit.y};
      var exit = {x: 0, y: 0};
      var length = (a, b) => Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));

      if(this.hasFreeLineOfSightTo(head, this.fruit, pathPoints)){
        //console.log("    has direct view of fruit");
        //console.log("    target = fruit");
        
        //this.drawCircle(this.fruit.x, this.fruit.y, 3, "#ff0000");
        this.snakes[s][0] = {x: this.fruit.x, y: this.fruit.y};

        continue;
      }

      var queue = new PriorityQueue((a, b) => a.lengthTotal < b.lengthTotal);

      // possible starting points
      for(let start of pathPoints){
        //console.log("    for start");

        // if head is practically at that point dont consider it as a start
        if(length(head, start) > 20){
          if(this.hasFreeLineOfSightTo(head, start, pathPoints)){
            queue.push(
              {
                x: start.x, 
                y: start.y, 
                inX: start.x, 
                inY: start.y, 
                lengthTotal: length(head, start) + length(start, this.fruit),
                length: length(head, start)
              }
            );
          }
        }
      }

      var looped = 0;
      // find all consequtive moves
      while(queue.size() > 0){
        //console.log("    while has queue " + queue.size());
        
        var path = queue.pop();
        //console.log("    with first element " + path.lengthTotal);
        //if(queue.size() > 0)
        //  console.log("    with next element " + queue.peek().lengthTotal);
        //this.drawCircle(path.x, path.y, 3, "#00ff00");

        looped++;
        if(looped > 150){
          console.log("No path found");
          //clearInterval(this.theInt);
          target = {x: this.snakes[s][0].x, y: this.snakes[s][0].y};
          break;
        }

        // check if current point leads directly to the fruit or no path is found
        if(this.hasFreeLineOfSightTo(path, this.fruit, pathPoints) || looped > 150){
          //console.log("      exit has line of sight to fruit");
          //console.log("      target = queue element");

          target.x = path.inX;
          target.y = path.inY;
          exit.x = path.x;
          exit.y = path.y;

          break;
        }

        for(let next of pathPoints){
          //console.log("      for next");

          if(this.hasFreeLineOfSightTo(path, next, pathPoints)){
            //console.log("        added " + (path.length + length(path, next) + length(next, this.fruit)));

            queue.push(
              {
                x: next.x, 
                y: next.y, 
                inX: path.inX, 
                inY: path.inY, 
                lengthTotal: path.length + length(path, next) + length(next, this.fruit),
                length: path.length + length(path, next)
              }
            );
          }
        }
      }

      //console.log("target set");
      //this.drawCircle(target.x, target.y, 3, "#ff0000");
      //this.drawCircle(exit.x, exit.y, 3, "#0000ff");
      this.snakes[s][0] = target;

    }
  }

  hasFreeLineOfSightTo(from, to, obsicales){
    //console.log("hasFreeLineOfSight()");

    // check if line from head to start is to close to a snake body (between path points and 
    // corresponding snake body)
    for(let obsical of obsicales){
      if(this.instersects(from, to, obsical, {x: obsical.sx, y: obsical.sy})){
        return false;
      }
    }

    // check if line from head to start passes through snake body
    for(let snake of this.snakes){
      for(var i = 2; i < snake.length; i++){

        var body1 = snake[i];
        var body2 = snake[i-1];

        if(this.instersects(from, to, body1, body2)){
          return false;
        }
      }
    }

    return true;
  }

  // determine if line from a1 to a2 intersects with line from b1 to b2
  instersects(a1, a2, b1, b2){

    //                  (Bx   - Ax)   * (Y    - Ay)   - (By   - Ay)   * (X    - Ax)   > 0
    var determinantA1 = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x) > 0;
    var determinantA2 = (b2.x - b1.x) * (a2.y - b1.y) - (b2.y - b1.y) * (a2.x - b1.x) >= 0;
    var determinantB1 = (a2.x - a1.x) * (b1.y - a1.y) - (a2.y - a1.y) * (b1.x - a1.x) > 0;
    var determinantB2 = (a2.x - a1.x) * (b2.y - a1.y) - (a2.y - a1.y) * (b2.x - a1.x) >= 0;

    return determinantA1 != determinantA2 && determinantB1 != determinantB2;
  }

  //draw the games state to canvas
  render(){

    //draw background color
    this.drawBackground();

    //for each body circle of player snake
    for(var i = 1; i < this.snakes[0].length; i++){
      //draw body circle
      this.drawCircle(this.snakes[0][i].x, this.snakes[0][i].y, 5, this.getColor(i * this.fruitColorDegreeGap));
    }

    // for each snake for each circle of bots
    for(var s = 1; s < this.snakes.length; s++){
      var prev = this.snakes[s][1];
      for(var i = 1; i < this.snakes[s].length; i++){
        //draw body circle
        this.drawCircle(this.snakes[s][i].x, this.snakes[s][i].y, 5, this.botColour);
        
        // this.ctx.beginPath();
        // this.ctx.moveTo(prev.x, prev.y);
        // this.ctx.lineTo(this.snakes[s][i].x, this.snakes[s][i].y);
        // this.ctx.stroke();

        prev = this.snakes[s][i];
      }
    }

    this.drawFruit();
    
  }

  getPathPoints(){

    var margin = 40;
    var marginSquared = margin * margin;
    
    // list of path and snake points pairs, x, y is point snake can travel, sx, sy is the snake 
    // body point it corresponds to
    var points = [];

    for(var s = 0; s < this.snakes.length; s++){

      if(this.snakes[s].length <= 3)
        continue;

      // calculate three path points for each of start and end of snake
      var second       = this.snakes[s][2];
      var third        = this.snakes[s][3];
      var secondlast   = this.snakes[s][this.snakes[s].length-2];
      var last         = this.snakes[s][this.snakes[s].length-1];

      // vectorSecondOutStraight = (third - second) / 2
      var vectorSecondOutStraight = {
        x: (third.x - second.x) / -2, 
        y: (third.y - second.y) / -2
      };
      var scale = Math.sqrt(marginSquared / (vectorSecondOutStraight.x * vectorSecondOutStraight.x + vectorSecondOutStraight.y * vectorSecondOutStraight.y));
      vectorSecondOutStraight.x *= scale;
      vectorSecondOutStraight.y *= scale;

      // vectorSecondOutLeft = vectorSecondOutStraight rotated 90 degrees clockwise
      var vectorSecondOutLeft = {
        x: -vectorSecondOutStraight.y, 
        y: vectorSecondOutStraight.x
      }

      // vectorSecondOutRight = vectorSecondOutStraight rotated 90 degrees counter clockwise
      var vectorSecondOutRight = {
        x: vectorSecondOutStraight.y, 
        y: -vectorSecondOutStraight.x
      }

      // pointOutSecondStreight = second + vectorSecondOutStraight
      var pointOutSecondLeft     = {x: second.x + vectorSecondOutLeft.x,     y: second.y + vectorSecondOutLeft.y    };
      var pointOutSecondStreight = {x: second.x + vectorSecondOutStraight.x, y: second.y + vectorSecondOutStraight.y};
      var pointOutSecondRight    = {x: second.x + vectorSecondOutRight.x,    y: second.y + vectorSecondOutRight.y   };

      points.push({x: pointOutSecondLeft.x,     y: pointOutSecondLeft.y,     sx: second.x, sy: second.y});
      //points.push({x: pointOutSecondStreight.x, y: pointOutSecondStreight.y, sx: second.x, sy: second.y});
      points.push({x: pointOutSecondRight.x,    y: pointOutSecondRight.y,    sx: second.x, sy: second.y});


      // vectorLastOutStraight = (secondlast - last) / 2
      var vectorLastOutStraight = {
        x: (secondlast.x - last.x) / -2, 
        y: (secondlast.y - last.y) / -2
      };
      var scale = Math.sqrt(marginSquared / (vectorLastOutStraight.x * vectorLastOutStraight.x + vectorLastOutStraight.y * vectorLastOutStraight.y));
      vectorLastOutStraight.x *= scale;
      vectorLastOutStraight.y *= scale;

      // vectorLastOutLeft = vectorLastOutStraight rotated 90 degrees clockwise
      var vectorLastOutLeft = {
        x: -vectorLastOutStraight.y, 
        y: vectorLastOutStraight.x
      }

      // vectorLastOutRight = vectorLastOutStraight rotated 90 degrees counter clockwise
      var vectorLastOutRight = {
        x: vectorLastOutStraight.y, 
        y: -vectorLastOutStraight.x
      }

      // pointOutLastStreight = last + vectorLastOutStraight
      var pointOutLastLeft     = {x: last.x + vectorLastOutLeft.x,     y: last.y + vectorLastOutLeft.y    };
      var pointOutLastStreight = {x: last.x + vectorLastOutStraight.x, y: last.y + vectorLastOutStraight.y};
      var pointOutLastRight    = {x: last.x + vectorLastOutRight.x,    y: last.y + vectorLastOutRight.y   };

      points.push({x: pointOutLastLeft.x,     y: pointOutLastLeft.y,     sx: last.x, sy: last.y});
      points.push({x: pointOutLastStreight.x, y: pointOutLastStreight.y, sx: last.x, sy: last.y});
      points.push({x: pointOutLastRight.x,    y: pointOutLastRight.y,    sx: last.x, sy: last.y});


      // for each body circle except first second and last
      for(var i = 3; i < this.snakes[s].length-1; i++){

        var previous = this.snakes[s][i-1];
        var current  = this.snakes[s][i];
        var next     = this.snakes[s][i+1];
        
        var vectorPrevious = {x: 100 * current.x - 100 * previous.x, y: 100 * current.y - 100 * previous.y};
        var vectorNext     = {x: 100 * current.x - 100 * next.x,     y: 100 * current.y - 100 * next.y    };

        var vectorMiddleTimes2 = {x: vectorPrevious.x + vectorNext.x, y: vectorPrevious.y + vectorNext.y};

        var scale = Math.sqrt(marginSquared / (vectorMiddleTimes2.x * vectorMiddleTimes2.x + vectorMiddleTimes2.y * vectorMiddleTimes2.y));
        vectorMiddleTimes2.x *= scale;
        vectorMiddleTimes2.y *= scale;

        var midPoint = {
          x: current.x + vectorMiddleTimes2.x, 
          y: current.y + vectorMiddleTimes2.y,
        };

          
        // var pointOutPrevious = {x: 3 * current.x - 2 * previous.x, y: 3 * current.y - 2 * previous.y};
        // var pointOutNext     = {x: 3 * current.x - 2 * next.x,     y: 3 * current.y - 2 * next.y    };
        // var midPoint = {x: (pointOutPrevious.x + pointOutNext.x) /2, y: (pointOutPrevious.y + pointOutNext.y) / 2};
        // var midPoint = {//equivilant to the previous three commented statements
        //   x: 3 * current.x - previous.x - next.x, 
        //   y: 3 * current.y - previous.y - next.y,
        // };

        points.push(
          {
            x: midPoint.x, 
            y: midPoint.y, 
            sx: current.x, 
            sy: current.y
          }
        );

        // var vectorPrevious = {x: current.x - previous.x, y: current.y - previous.y};
        // var vectorNext     = {x: current.x - next.x,     y: current.y - next.y    };

        // var lengthPrevious = Math.sqrt(vectorPrevious.x * vectorPrevious.x + vectorPrevious.y * vectorPrevious.y);
        // var lengthNext     = Math.sqrt(vectorNext.x     * vectorNext.x     + vectorNext.y     * vectorNext.y    );
        // var dotMul = vectorPrevious.x * vectorNext.x + vectorPrevious.y * vectorNext.y;
        
        // var angle = Math.acos(dotMul/lengthNext/lengthPrevious)



        // var vectorMiddle = {x: margin * Math.cos(angle), y: margin * Math.sin(angle)};
      }
    }

    return points;
  }

  //draw circle onto canvas
  drawCircle(x, y, r, c){
    this.ctx.beginPath();
    this.ctx.arc(x,y,r,0, 2 * Math.PI, false);
    this.ctx.fillStyle = c;
    this.ctx.fill();
    this.ctx.stroke();
  }

  //draw thebackground onto canvas
  drawBackground(){

    var color = {h: this.backgroundColor.h, s: this.backgroundColor.s, v: this.backgroundColor.v};

    if(this.flashIntensity > 0.01){

      var differences = {h: color.h - this.falshColor.h, s: color.s - this.falshColor.s, v: color.v - this.falshColor.v};
      differences.h *= this.flashIntensity;
      differences.s *= this.flashIntensity;
      differences.v *= this.flashIntensity;

      color.h -= differences.h;
      color.s -= differences.s;
      color.v -= differences.v;

      this.flashIntensity -= 0.1;
    }

    this.ctx.fillStyle = this.getColor(color.h, color.s, color.v);
    this.ctx.fillRect(0,0,this.myCanvas.nativeElement.width,this.myCanvas.nativeElement.height);
  }

  //draw a circle for the current fruit item
  drawFruit(){
    this.drawCircle(this.fruit.x, this.fruit.y ,this.fruit.size, this.fruit.color);
  }

  //process pan event (update global values)
  panUpdate(x,y){
    //this.mouse.x = x;
    //this.mouse.y = y;
    this.snakes[0][0].x = x;
    this.snakes[0][0].y = y;
  }

  //calculate next position of the snake circle 
  getNextPosition(fx, fy, sx, sy, strength, constantmotion = false){
    //setup relevant values
    var marginSquared = 100;

    var oldPos = {x: sx, y: sy};
    var target = {x: fx, y: fy};

    var difference = {
      x: target.x - oldPos.x, 
      y: target.y - oldPos.y
    };
    var change = {
      x: difference.x / 100 * strength, 
      y: difference.y / 100 * strength
    }

    var newPosSmooth = {
      x: oldPos.x + change.x, 
      y: oldPos.y + change.y
    };

    var scale = Math.sqrt(strength * strength / (change.x * change.x + change.y * change.y));
    change.x *= scale;
    change.y *= scale;

    var newPosConstant = {
      x: oldPos.x + change.x, 
      y: oldPos.y + change.y
    };


    if(constantmotion){
      //distance between circle and target
      var newDistanceSquared = (newPosConstant.x - target.x) * (newPosConstant.x - target.x) + (newPosConstant.y - target.y) * (newPosConstant.y - target.y);

      //if its close enough, return original position
      if(newDistanceSquared <= marginSquared){
        return newPosSmooth;
      }else{
        return newPosConstant;
      }
    }else{
      //distance between circle and target
      var newDistanceSquared = (newPosSmooth.x - target.x) * (newPosSmooth.x - target.x) + (newPosSmooth.y - target.y) * (newPosSmooth.y - target.y);

      //if its close enough, return original position
      if(newDistanceSquared <= marginSquared){
        return oldPos;
      }else{
        return newPosSmooth;
      }
    }
  }

  //check if head of snake intercepts with any body parts
  checkIntercept(){

    //setup relevant values
    var size = 10

    //TODO change s=1 to 0!
    for(var s = 0; s < this.snakes.length; s++){

      var head = this.snakes[s][1];
      
      // for every snake, for every body circle
      for(var t = 0; t < this.snakes.length; t++){
        for(var i = 3; i < this.snakes[t].length; i++){

          var body = this.snakes[t][i];

          var distanceQuad = (head.x - body.x) * (head.x - body.x) + (head.y - body.y) * (head.y - body.y);

          if(distanceQuad <= (size*size)){

            // if the player hit anyone of rthem selves, exit game otherwhise reset corresponding bot
            if(s == 0){
              return true;
            }else if(this.snakes[s].length > 3){

              //console.log(this.loop + " " + s + " intesects with " + t + " at " + i);
              
              //clearInterval(this.theInt);
              
              this.snakes[s].splice(3, this.snakes[s].length-3);

            }

          }
        }
      }

    }
    return false;
  }

  //generate a new fruit item
  makeFruit(){
    console.log("New fruit");

    //fruit properties
    this.fruit.x = this.getRandomInt(window.innerWidth/10, (window.innerWidth/10)*9);
    this.fruit.y = this.getRandomInt(window.innerHeight/10, (window.innerHeight/10)*9);
    this.fruit.size = 20;
    this.fruit.color = this.getColor(this.points * this.fruitColorDegreeGap + 3 * this.fruitColorDegreeGap)

    //other color selections
    //var randomNum = this.getRandomInt(0, this.colors.length -1);
    //this.fruitC = this.colors[randomNum];
    //var randomNum = this.getRandomInt(0, 359);
    //this.fruitC = this.getColor(randomNum)
  }

  //check if the current fruit item has been consumed
  checkEat(snake){

    //get relevant data
    var size = this.fruit.size + 5;
    var frontx: any = snake[1].x;
    var fronty: any = snake[1].y;

    //calculate distance between head and fruit
    var distanceQuad;
    distanceQuad = (this.fruit.x-frontx)*(this.fruit.x-frontx)+(this.fruit.y-fronty)*(this.fruit.y-fronty);

    //return if fruit is consumed
    return distanceQuad <= (size*size)
  }

  //reduce fruit size and spawn new one of needed
  shrinkFruit(){

    if(this.fruit.size > 1){

      // of fruit is bigger than 1px, shrink it
      this.fruit.size -= 0.05

    }else{

      //if fruit is too small, spawn new one and subtract a life
      this.makeFruit();
      this.lives -= 1;
      //this.nativeAudio.play('pop', () => console.log('1bite is done playing'));

    }
  }

  //update the fruit properties if its eaten
  updateFruit(){

    for(var s = 0; s < this.snakes.length; s++){

      //if fruit has been eaten
      if(this.checkEat(this.snakes[s])){

        //append new body circle to snake
        var last = this.snakes[s].length - 1;
        var xSnake = this.snakes[s][last].x;
        var ySnake = this.snakes[s][last].y;
        this.snakes[s].push({x: xSnake, y: ySnake});

        // if player go tthe fruit award the point
        if(s == 0){
          this.points += 1;

          //this.falshColor = {h: this.backgroundColor.h, s: 0.3, v: 0.90};
          //this.flashIntensity = 1;
          this.falshColor = {h: this.backgroundColor.h, s: this.backgroundColor.s, v: 0.80};
          this.flashIntensity = 1;
        }else{
          //this.falshColor = {h: this.backgroundColor.h, s: this.backgroundColor.s, v: 0.80};
          //this.flashIntensity = 1;
        }

        //generate new fruit and update points
        this.makeFruit();

        //TODO audio
        //switch(this.getRandomInt(1,3)){
        //  case 1:
        //      this.nativeAudio.play('1bite', () => console.log('1bite is done playing'));
        //    break
        //  case 2:
        //      this.nativeAudio.play('2bite', () => console.log('uniqueId1 is done playing'));
        //    break
        //  case 3:
        //      this.nativeAudio.play('3bite', () => console.log('uniqueId1 is done playing'));
        //}

      }


    }

  }

  //generate a random number in the provided range
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  //get rgb color string with specified hue
  getColor(h, s = 0.65, v = 0.95){
    var r, g, b, sector, hueInSector, p, q, t;
    
    h %= 360;

    h /= 60
    sector = Math.floor(h);
    hueInSector = h - sector

    p = v * (1 - s)
    q = v * (1 - s * hueInSector)
    t = v * (1 - s * (1 - hueInSector))

    switch(sector) {
      case 0:
        r = v;
        g = t;
        b = p;
        break;
   
      case 1:
        r = q;
        g = v;
        b = p;
        break;
   
      case 2:
        r = p;
        g = v;
        b = t;
        break;
   
      case 3:
        r = p;
        g = q;
        b = v;
        break;
   
      case 4:
        r = t;
        g = p;
        b = v;
        break;
      
      case 5:
      default:
        r = v;
        g = p;
        b = q;
    }

    r = Math.floor(r * 255)
    g = Math.floor(g * 255)
    b = Math.floor(b * 255)
    return "rgb("+r+","+g+","+b+")";
  }

}

class PriorityQueue{

  comparator;
  heap = [];
  indexParent = i => ((i + 1) >>> 1) - 1;
  indexLeft = i => (i << 1) + 1;
  indexRight = i => (i + 1) << 1;

  constructor(comparator = (a, b) => a > b){
    this.comparator = comparator;
  }

  size(){
    return this.heap.length;
  }

  isEmpty(){
    return this.size() == 0;
  }

  peek(){
    return this.heap[0];
  }

  push(...values){
    for(let value of values){
      this.heap.push(value);
      this.siftUp();
    }
  
    return this.size();
  }

  pop(){
    const poppedValue = this.heap[0];
    const last = this.size() - 1;

    if (last > 0) {
      this.swap(0, last);
    }

    this.heap.pop();
    this.siftDown();

    return poppedValue;
  }

  greater(i, j){
    return this.comparator(this.heap[i], this.heap[j]);
  }

  swap(i, j){
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  siftUp(){
    let node = this.size() - 1;
    while (node > 0 && this.greater(node, this.indexParent(node))) {
      this.swap(node, this.indexParent(node));
      node = this.indexParent(node);
    }
  }

  siftDown() {
    var node = 0;
    while(
      (this.indexLeft(node) < this.size() && this.greater(this.indexLeft(node), node)) ||
      (this.indexRight(node) < this.size() && this.greater(this.indexRight(node), node))
    ){
      var maxChild = (this.indexRight(node) < this.size() && this.greater(this.indexRight(node), this.indexLeft(node))) ? this.indexRight(node) : this.indexLeft(node);
      this.swap(node, maxChild);
      node = maxChild;
    }
  }
}
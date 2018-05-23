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

  //globally used values
  screenWidth= window.innerWidth;
  screenHeight= window.innerHeight;
  points = 0;
  ctx: any;
  posx: any;
  posy: any;
  fruitX = window.innerWidth/5;
  fruitY = innerHeight/5;
  fruitC = "blue";
  fruitS = 20;
  colors = ["#FF8800", "#0088FF", "#88FF88", "rgb(88, 0, 255)"]
  botColour = "#555555";
  lives = 3;
  down = false;
  theInt : any;
  userSnake = [[window.innerWidth/2, window.innerHeight/2, this.getColor(0)],[window.innerWidth/2, window.innerHeight/2, this.getColor(0)]];
  snakes = [this.userSnake]
  
  username:string;
  highScore:number;
  enableBots:boolean;
  botCount:number;

  constructor(public navCtrl: NavController, /*private nativeAudio: NativeAudio,*/ public plt: Platform, public navParams: NavParams) {

    var parameters = navParams.data

    this.username = parameters.username;
    this.highScore = parameters.highScore;
    this.enableBots = parameters.enableBots;
    this.botCount = parameters.botCount;

  }



  
  //executes once all views have been initialised 
  ngAfterViewInit() {

    //init canvas
    this.ctx = this.myCanvas.nativeElement.getContext("2d");

    //init mouse/touch inputs
    let hammer = new window['Hammer'](this.myCanvas.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL});
    hammer.on('pan', (event) => {
      //process pan event
      this.panUpdate(event.center.x, event.center.y);
    });

    //setup refresh interval
    this.theInt = setInterval(() => {this.render();}, 1000/60);

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

  //draw the games state to canvas
  render(){

    if(!this.checkSelfIntercept()&&this.lives>0){
      //if still alive

      //draw background color
      this.drawBackground();

      //if position is defined
      if(this.posx!=null){
        //get and update next position
        var yo = this.getNextPosition(this.posx, this.posy, this.userSnake[0][0], this.userSnake[0][1], 10)
        this.userSnake[0][0] = yo[0];
        this.userSnake[0][1] = yo[1];

        //draw head
        this.drawCircle(this.userSnake[0][0], this.userSnake[0][1], 5, this.userSnake[0][2]);

        //for each following body circle
        for(var i = 1; i<this.userSnake.length; i++){
          
          //get and update next position
          yo = this.getNextPosition(this.userSnake[i-1][0], this.userSnake[i-1][1], this.userSnake[i][0], this.userSnake[i][1], 10)
          this.userSnake[i][0] = yo[0];
          this.userSnake[i][1] = yo[1];
          
          //draw body circle
          this.drawCircle(this.userSnake[i][0], this.userSnake[i][1], 5, this.userSnake[i][2]);
        }
      }

      this.updateFruit();

    }else {
      //if player died

      //stop update interval
      clearInterval(this.theInt);
      //console.log(this.points);
      //this.navCtrl.pop();

      //navigate to lost page
      this.navCtrl.push(LostPage, this.points);

    }
  }

  //reset the games state and values
  setupGameState(){
    this.points = 0;
    this.makeFruit();
    this.lives = 3;
    this.userSnake = [[window.innerWidth/2, window.innerHeight/2, this.getColor(0)],[window.innerWidth/2, window.innerHeight/2, this.getColor(0)]];

    this.snakes = [this.userSnake];

    if(this.enableBots){
      for(var i = 0; i < this.botCount; i++){
        var snake = [[window.innerWidth/2, window.innerHeight/2, this.botColour],[window.innerWidth/2, window.innerHeight/2, this.botColour]];
      }
    }

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
    this.ctx.fillStyle = "#b4a7d6";
    this.ctx.fillRect(0,0,this.myCanvas.nativeElement.width,this.myCanvas.nativeElement.height);
  }

  //draw a circle for the current fruit item
  drawFruit(){
    this.drawCircle(this.fruitX,this.fruitY,this.fruitS, this.fruitC);
  }

  //process pan event (update global values)
  panUpdate(x,y){
    this.posx = x;
    this.posy = y
  }

  //calculate next position of the snake circle 
  getNextPosition(fx, fy, sx, sy, strength){
    //setup relevant values
    var margin = 10
    var xmove = fx-sx;
    var ymove = fy-sy;
    xmove = sx+xmove/100 * strength
    ymove = sy+ymove/100 * strength

    //distance between circle and target
    var distanceQuad = (xmove-fx)*(xmove-fx)+(ymove-fy)*(ymove-fy);

    //if its close enough, return target position
    if(distanceQuad <= (margin*margin)){
      return [sx, sy]
    }

    //new position
    return [xmove, ymove]
  }

  //check of head of snake intercepts it self
  checkSelfIntercept(){

    //setup relevant values
    var size = 10
    var frontx: any = this.userSnake[0][0]
    var fronty: any = this.userSnake[0][1]
    var x: any;
    var y: any;
    var distanceQuad;

    //test if each of the body circles touch the first head circle
    for(var i = 2; i<this.userSnake.length; i++){
      x = this.userSnake[i][0]
      y = this.userSnake[i][1]
      distanceQuad = (x-frontx)*(x-frontx)+(y-fronty)*(y-fronty);
      if(distanceQuad <= (size*size)){
        //console.log("you lose")
        // this.nativeAudio.preloadSimple('dead', 'assets/sounds/dead.mp3').then();
        // this.nativeAudio.play('dead', () => console.log('uniqueId1 is done playing'));
        return true;
      }
    }
    return false;
  }

  //generate a new fruit item
  makeFruit(){

    //fruit properties
    this.fruitX = this.getRandomInt(window.innerWidth/10, (window.innerWidth/10)*9);
    this.fruitY = this.getRandomInt(window.innerHeight/10, (window.innerHeight/10)*9);
    this.fruitS = 20;
    this.fruitC = this.getColor(this.points * 13)

    //other color selections
    //var randomNum = this.getRandomInt(0, this.colors.length -1);
    //this.fruitC = this.colors[randomNum];
    //var randomNum = this.getRandomInt(0, 359);
    //this.fruitC = this.getColor(randomNum)
  }

  //check if the current fruit item has been consumed
  checkEat(){

    //get relevant data
    var size = this.fruitS+5;
    var frontx: any = this.userSnake[0][0];
    var fronty: any = this.userSnake[0][1];

    //calculate distance between head and fruit
    var distanceQuad;
    distanceQuad = (this.fruitX-frontx)*(this.fruitX-frontx)+(this.fruitY-fronty)*(this.fruitY-fronty);

    //return if fruit is consumed
    return distanceQuad <= (size*size)
  }

  //reduce fruit size and spawn new one of needed
  shrinkFruit(){

    if(this.fruitS>1){

      // of fruit is bigger than 1px, shrink it
      this.fruitS -= 0.05

    }else{

      //if fruit is too small, spawn new one and subtract a life
      this.makeFruit();
      this.lives -= 1;
      //this.nativeAudio.play('pop', () => console.log('1bite is done playing'));

    }
  }

  //update the fruit properties if its eaten
  updateFruit(){

    //if fruit has been eaten
    if(this.checkEat()){

      //append new body circle to snake
      var last = this.userSnake.length - 1;
      var xSnake = this.userSnake[last][0];
      var ySnake = this.userSnake[last][1];
      this.userSnake.push([xSnake, ySnake, this.fruitC]);

      //generate new fruit and update points
      this.makeFruit();
      this.points+=1;

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

    //shrink fruit item and draw it
    this.shrinkFruit();
    this.drawFruit();
  }

  //generate a random number in the provided range
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  //get rgb color string with specified hue
  getColor(h){
    var r, g, b, s, v, sector, hueInSector, p, q, t;
    
    h %= 360;
    s = 0.75;
    v = 1;

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

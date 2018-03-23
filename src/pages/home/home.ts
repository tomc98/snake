import { Component, ViewChild } from '@angular/core';
import {Platform} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';


// import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myCanvas') myCanvas;
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
  lives = 3;
  down = false;
  theInt : any;
  snake = [[window.innerWidth/2, window.innerHeight/2, "red"],[window.innerWidth/2, window.innerHeight/2, "red"]];
  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio, public plt: Platform) {


  }

  ngAfterViewInit() {

    this.ctx = this.myCanvas.nativeElement.getContext("2d");
    let hammer = new window['Hammer'](this.myCanvas.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL});
    hammer.on('pan', (event) => {
      this.clickUpdate(event.center.x, event.center.y);
    });
    this.theInt = setInterval(() => {this.render();}, 1000/60);
    this.restart();
    this.loadSound();
  }

  loadSound(){

      if (this.plt.is('android')) {
          this.nativeAudio.preloadSimple('pop', '../../assets/sounds/pop.mp3').then();
          this.nativeAudio.preloadSimple('1bite', '../../assets/sounds/1bite.mp3').then();
          this.nativeAudio.preloadSimple('2bite', '../../assets/sounds/2bite.mp3').then();
          this.nativeAudio.preloadSimple('3bite', '../../assets/sounds/3bite.mp3').then();
      }
  }


  render(){
    if(!this.checkLose()&&this.lives>0){
      this.background();
      if(this.posx!=null){
        var yo = this.movement(this.posx, this.posy, this.snake[0][0], this.snake[0][1], 10)
        this.snake[0][0] = yo[0];
        this.snake[0][1] = yo[1];
        this.ball(this.snake[0][0], this.snake[0][1], 5, this.snake[0][2]);
        for(var i = 1; i<this.snake.length; i++){
          yo = this.movement(this.snake[i-1][0], this.snake[i-1][1], this.snake[i][0], this.snake[i][1], 10)
          this.snake[i][0] = yo[0];
          this.snake[i][1] = yo[1];
          this.ball(this.snake[i][0], this.snake[i][1], 5, this.snake[i][2]);
        }
      }
      this.fruitProcess();
      this.displayPoints();
      this.displayLives();
    }else {
      console.log(this.points);
      clearInterval(this.theInt);
      this.navCtrl.pop();

    }
  }

  restart(){
    this.points = 0;
    this.makeFruit();
    this.lives = 3;
    this.snake = [[window.innerWidth/2, window.innerHeight/2, "red"],[window.innerWidth/2, window.innerHeight/2, "red"]];
  }

  background(){
    this.ctx.fillStyle = "#18ed09";
    this.ctx.fillRect(0,0,this.myCanvas.nativeElement.width,this.myCanvas.nativeElement.height);
  }

  clickUpdate(x,y){
    this.posx = x;
    this.posy = y
  }

  ball(x, y, r, c){
    this.ctx.beginPath();
    this.ctx.arc(x,y,r,0, 2 * Math.PI, false);
    this.ctx.fillStyle = c;
    this.ctx.fill();
    this.ctx.stroke();
  }

  movement(fx, fy, sx, sy, strength){
    //radius
    var size = 10
    var xmove = fx-sx;
    var ymove = fy-sy;
    xmove = sx+xmove/100 * strength
    ymove = sy+ymove/100 * strength
    var distanceQuad = (xmove-fx)*(xmove-fx)+(ymove-fy)*(ymove-fy);
    if(distanceQuad <= (size*size)){
      return [sx, sy]
    }
    return [xmove, ymove]
  }

  checkLose(){
    var size = 10
    var frontx: any = this.snake[0][0]
    var fronty: any = this.snake[0][1]
    var x: any;
    var y: any;
    var distanceQuad;
    for(var i = 2; i<this.snake.length; i++){
      x = this.snake[i][0]
      y = this.snake[i][1]
      distanceQuad = (x-frontx)*(x-frontx)+(y-fronty)*(y-fronty);
      if(distanceQuad <= (size*size)){
        console.log("you lose")
        // this.nativeAudio.preloadSimple('dead', 'assets/sounds/dead.mp3').then();
        // this.nativeAudio.play('dead', () => console.log('uniqueId1 is done playing'));
        return 1
      }
    }
    return 0
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  makeFruit(){
    this.fruitX = this.getRandomInt(window.innerWidth/10, (window.innerWidth/10)*9);
    this.fruitY = this.getRandomInt(window.innerHeight/10, (window.innerHeight/10)*9);
    this.fruitS = 20;
    var cNum = this.getRandomInt(0, 10);
    switch(cNum){
      case 0:
        this.fruitC = "blue";
        break
      case 1:
        this.fruitC = "orange";
        break
      case 2:
        this.fruitC = "red";
        break
      case 3:
        this.fruitC = "green";
        break
      case 4:
        this.fruitC = "yellow";
        break
      case 5:
        this.fruitC = "purple";
        break
      case 6:
        this.fruitC = "teal";
        break
      case 7:
        this.fruitC = "black";
        break
      case 8:
        this.fruitC = "grey";
        break
      case 9:
        this.fruitC = "white";
        break
      case 10:
        this.fruitC = "pink";
        break
    }
  }

  displayFruit(){
    this.ball(this.fruitX,this.fruitY,this.fruitS, this.fruitC)
  }

  checkEat(){
    var size = this.fruitS+5;
    var frontx: any = this.snake[0][0];
    var fronty: any = this.snake[0][1];
    var distanceQuad;
    distanceQuad = (this.fruitX-frontx)*(this.fruitX-frontx)+(this.fruitY-fronty)*(this.fruitY-fronty);
    if(distanceQuad <= (size*size)){
        return 1
      }
    return 0
  }

  displayPoints(){
    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.font = "30px Arial";
    this.ctx.fillText(this.points,window.innerWidth/6 * 5,50);
    this.ctx.stroke();
  }

  displayLives(){
    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.font = "30px Arial";
    this.ctx.fillText(this.lives,window.innerWidth/6,50);
    this.ctx.stroke();
  }

  fruitDisapear(){
    if(this.fruitS>1){
      this.fruitS -= 0.05
    }else{
      this.makeFruit();
      this.lives -= 1;
      this.nativeAudio.play('pop', () => console.log('1bite is done playing'));
    }
  }

  fruitProcess(){
    if(this.checkEat()){
      var last = this.snake.length - 1;
      var xSnake = this.snake[last][0];
      var ySnake = this.snake[last][1];
      this.snake.push([xSnake, ySnake, this.fruitC]);
      this.makeFruit();
      this.points+=1;
      switch(this.getRandomInt(1,3)){
        case 1:
            this.nativeAudio.play('1bite', () => console.log('1bite is done playing'));
          break
        case 2:
            this.nativeAudio.play('2bite', () => console.log('uniqueId1 is done playing'));
          break
        case 3:
            this.nativeAudio.play('3bite', () => console.log('uniqueId1 is done playing'));
      }

    }
    this.fruitDisapear();
    this.displayFruit();
  }



}

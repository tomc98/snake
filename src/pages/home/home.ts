import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GamePage } from '../game/game';
import { HowToPage } from '../how-to/how-to';
import { LeaderBoardPage } from '../leader-board/leader-board';
import { AccountPage } from '../account/account';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  //values to be displayed on the page
  username:string = "TechSupport420";
  birthday:string = "1998-08-14";
  age:number = 19;
  botCount:number = 3;
  highScore:number = 129;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //currently not used
  ionViewDidLoad() {
    //console.log('ionViewDidLoad SplashPage');
  }

  //on play button pressed, go to game
  onClickPlay(){
    var parameters = {
      enableBots: true,
      botCount: this.botCount,
      username: this.username,
      highScore: this.highScore
    }
    this.navCtrl.push(GamePage, parameters);
  }

  //on leader board button pressed, go there
  onClickLeaderBoard(){
    this.navCtrl.push(LeaderBoardPage);
  }

  //on how to play pressed, go there
  onClickHowToPlay(){
    this.navCtrl.push(HowToPage);
  }

  //on edit (account) pressed, go there
  onClickEditAccount(){
    //account data to be passed to account page
    var data = {
      username: this.username,
      birthday: this.birthday
    }
    
    this.navCtrl.push(AccountPage, data);
  }
}

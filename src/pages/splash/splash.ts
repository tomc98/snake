import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HowToPage } from '../how-to/how-to';
import { LeaderBoardPage } from '../leader-board/leader-board';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

  onClickPlay(){
    this.navCtrl.push(HomePage);
  }

  onClickLeaderBoard(){
    this.navCtrl.push(LeaderBoardPage);
  }

  onClickHowToPlay(){
    this.navCtrl.push(HowToPage);
  }
}

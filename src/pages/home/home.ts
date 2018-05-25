import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GamePage } from '../game/game';
import { HowToPage } from '../how-to/how-to';
import { LeaderBoardPage } from '../leader-board/leader-board';
import { AccountsPage } from '../accounts/accounts';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  //values to be displayed on the page
  username:string;
  birthday:string;
  age:string;
  botCount:number = 3;
  highScore:number = 129;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewWillEnter(){
    this.loadPreferences();
  }

  loadPreferences(){
    this.storage.get('activeuser').then((activeuser) => {

      if(activeuser != null){

        this.storage.get('accounts').then((accounts) =>{

          var account = accounts[activeuser];

          this.username = account.username;
          this.birthday = account.birthday;

          if(this.birthday != null){
            this.age = '13';
          }

        });

      }

    });
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
    this.navCtrl.push(AccountsPage);
  }
}

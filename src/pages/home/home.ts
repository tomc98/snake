import { Component, ViewChild } from '@angular/core';
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

  @ViewChild('checkboxEnableBots') checkboxEnableBots;

  //values to be displayed on the page
  computerDifficulty:number = 5;
  
  account = {username: '', highscore: 0};

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewWillEnter(){
    this.loadPreferences();
  }

  loadPreferences(){
    this.storage.get('activeuser').then((activeuser) => {

      console.log(activeuser);

      this.storage.get('accounts').then((accounts) =>{

        this.account = accounts[activeuser];

      });

    });
  }

  //on play button pressed, go to game
  onClickPlay(){

    var parameters = {
      //enableComputer: this.checkboxEnableBots.checked,
      enableComputer: true,
      computerDifficulty: this.computerDifficulty
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

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

  @ViewChild('checkboxEnableComputer') checkboxEnableComputer;

  //values to be displayed on the page
  computerDifficulty:number = 5;
  
  account:any = {username: '', highscore: 0};

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  // when the screen is shown it will reload preferences from storage
  ionViewWillEnter(){
    this.loadPreferences();
  }

  // load from storage
  loadPreferences(){
    this.storage.get('activeuser').then((activeuser) => {

      this.storage.get('accounts').then((accounts) => {

        if(accounts != null && activeuser != null){
          // if accounts have been setup use them
          this.account = accounts[activeuser];
        }else{
          // else setup default account

          // accounts holds a list of all accounts
          // [
          //   {
          //     username:'name',
          //     birthday:'bday',
          //     avatar:image,
          //     highscore:x,
          //     highscorehistory:[
          //       {
          //         datetime:time,
          //         highscore:x
          //       },
          //       ...
          //     ]
          //   },
          //   ...
          // ]

          this.account = {
            username: 'player1',
            birthday: new Date().toISOString(),
            avatar: "assets/imgs/default_avatar.png",
            highscore: 0,
            highscorehistory: [
              {datetime: new Date().toISOString(), highscore: 0}
            ]
          };

          this.storage.set('accounts', [this.account]);
          this.storage.set('activeuser', 0);

        }

      });

    });
  }

  //on play button pressed, go to game
  onClickPlay(){

    var parameters = {
      enableComputer: this.checkboxEnableComputer.checked,
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

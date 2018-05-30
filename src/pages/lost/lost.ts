import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lost',
  templateUrl: 'lost.html',
})

export class LostPage {

  //public variable to show points scored and highscore in html
  points:string = '0';
  highscore:string = null;
  account:any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

    //retrieve data from navigation params
    this.points = navParams.data

    this.storage.get('activeuser').then((activeuser) => {

      if(activeuser != null){

        this.storage.get('accounts').then((accounts) =>{

          this.account = accounts[activeuser];

          if(this.points > this.account.highscore){
            this.account.highscore = this.points;

            this.account.highscorehistory.push({datetime: new Date().toISOString(), highscore: this.points});

            this.storage.set('accounts', accounts);
          }

        });

      }

    });

  }

  //on back button click pop navigation stack to root
  onClickBack(){
    this.navCtrl.popToRoot()
  }
}

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
  public points:string = '0';
  public highscore:string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

    //retrieve data from navigation params
    this.points = navParams.data

    //retrieve high score from storage
    storage.get('user').then((user) => {

      // if has a user account
      if(user.username != null){
        this.highscore = user.highscore;

        // if this is a new highscore
        if(this.points > this.highscore){
          this.highscore = this.points;

          // update and store new highscore
          user.highscore = this.highscore;
          storage.set('user', user);

          // add item to highscore history
          var newHighscoreHistoryItem = {datetime: null, score: this.highscore};
          storage.get('highscorehistory').then((highscorehistory) => {
            highscorehistory.push(newHighscoreHistoryItem);
            storage.set('highscorehistory', highscorehistory);
          });
        }
      }

    });
  }

  //not used 
  ionViewDidLoad() {
    //console.log('ionViewDidLoad LostPage');
  }

  //on back button click pop navigation stack to root
  onClickBack(){
    this.navCtrl.popToRoot()
  }
}

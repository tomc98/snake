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
  public points = 0;
  public highscore = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

    //retrieve data from navigation params
    this.points = navParams.data

    //retrieve high score from storage
    storage.get('highscores').then((val) => {

      var newHighscoreObject = {datetime: null, score: this.points}
      var highscoreObject = {datetime: null, score: this.points}

      // if a previous highscore was set use it instead
      if(val.length > 0){
        highscoreObject = val[val.length-1];
      }

      // if this score is better add it to the list
      if(this.points > highscoreObject.score){
        val.push(newHighscoreObject)
      }

      //get the highest highscore into the display variable
      this.highscore = highscoreObject.score;

      // override highscores with possibly update list
      storage.set('highscores', val);
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

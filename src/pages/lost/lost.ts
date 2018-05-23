import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  public highscore = 125;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log(navParams.data)

    //retrieve data from navigation params
    this.points = navParams.data
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

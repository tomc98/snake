import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HowToPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-how-to',
  templateUrl: 'how-to.html',
})
export class HowToPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //not currently used
  ionViewDidLoad() {
    //console.log('ionViewDidLoad HowToPage');
  }

  //on back button pressed, pop to root
  onClickBack(){
    this.navCtrl.popToRoot()
  }
}

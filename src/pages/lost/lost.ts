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

  public points = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.data)
    this.points = navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LostPage');
  }

  onClickBack(){
    this.navCtrl.popToRoot()
  }
}

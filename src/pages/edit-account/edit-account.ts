import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit_account',
  templateUrl: 'edit-account.html',
})
export class EditAccountPage {

  //values to be displayed on page
  activeaccount:number = null;
  account:any = null;
  accounts:any = null;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    
    this.activeaccount = navParams.data;

    storage.get('accounts').then((accounts) => {
      this.accounts = accounts;
      this.account = accounts[this.activeaccount];
    });
  }

  //on save button pressed
  onClickSave(){

    this.storage.set('accounts', this.accounts)

    this.navCtrl.popToRoot()
  }

  //on cancel button pressed
  onClickCancel(){
    this.navCtrl.popToRoot()
  }
}

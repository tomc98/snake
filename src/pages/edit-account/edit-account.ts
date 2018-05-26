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
  selector: 'page-edit-account',
  templateUrl: 'edit-account.html',
})
export class EditAccountPage {

  //values to be displayed on page
  activeaccount:number = -1;
  account:any = {username:'', birthday:''};
  accounts:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    
    this.activeaccount = navParams.data;

    storage.get('accounts').then((accounts) => {

      this.accounts = accounts;

      // if new account
      if(this.activeaccount == -1){

        this.account = {
          username: 'player' + (this.accounts.length+1),
          birthday: new Date().toISOString(),
          avatar: null,
          highscore: 0,
          highscorehistory: [
            {datetime: new Date().toISOString(), highscore: 0}
          ]
        };

        this.accounts.push(this.account);

      }else{

        this.account = this.accounts[this.activeaccount];

      }
      
    });
  }

  //on save button pressed
  onClickSave(){

    this.storage.set('accounts', this.accounts)

    this.navCtrl.pop()
  }

  //on cancel button pressed
  onClickCancel(){
    this.navCtrl.pop()
  }
}

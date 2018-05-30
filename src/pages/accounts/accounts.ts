import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EditAccountPage } from '../edit-account/edit-account';

/**
 * Generated class for the AccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class AccountsPage {

  //account arrays
  accounts = [];
  activeuser = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private alertCtrl: AlertController) {}

  //when page loads
  ionViewWillEnter() {
    //gets accounts from device
    this.storage.get('accounts').then((accounts) => {
      this.accounts = accounts;
    });

    this.storage.get('activeuser').then((activeuser) => {
      this.activeuser = activeuser;
    });
  }

  //goes back to home page
  onClickBack(){
    this.navCtrl.pop();
  }

  //sets active user to clicked one, then goes back to home
  onClickSelect(i){
    this.storage.set('activeuser', i);
    this.navCtrl.pop();
  }

  //goes into edit for account
  onClickEdit(i){
    this.navCtrl.push(EditAccountPage, i);
  }

  //makes new account and goes to edit page with it selected
  onClickNew(){
    this.navCtrl.push(EditAccountPage, -1);
  }

  //deletes the account
  onClickDelete(i){
    //create comfirmation dialog
    let alert = this.alertCtrl.create({
      title: "Delete " + this.accounts[i].username + "'s account",
      subTitle: "Do you really want to delete " + this.accounts[i].username + "'s account and remove it from the leader board?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },{
          text: 'Delete',
          handler: () => {

            //delete username, birthday, highscores and leaderboard entry
            this.accounts.splice(i, 1);
            this.storage.set('accounts', this.accounts);

            // if removed account was above removed account, shift selected index up
            if(i <= this.activeuser && i > 0){
              this.storage.set('activeuser', this.activeuser-1);
            }

          }
        }
      ]
    });

    //show dialog
    alert.present();
  }

}

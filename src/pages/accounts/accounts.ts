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

  accounts = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private alertCtrl: AlertController) {

  }

  ionViewWillEnter() {
    this.storage.get('accounts').then((accounts) => {
      this.accounts = accounts;
    });
  }

  onClickBack(){
    this.navCtrl.pop();
  }

  onClickSelect(i){
    this.storage.set('activeuser', i);
    this.navCtrl.pop();
  }

  onClickEdit(i){
    this.navCtrl.push(EditAccountPage, i);
  }

  onClickNew(){
    this.navCtrl.push(EditAccountPage, -1);
    
  }

  onClickDelete(i){

  }

  //TODO port
  //on delete button pressed, show deletion comfirmatoin dialog
  onClickDeleteX(){

    //create comfirmation dialog
    let alert = this.alertCtrl.create({
      title: 'Delete your account',
      subTitle: 'Do you really want to remove your account from the global leader board',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },{
          text: 'Delete',
          handler: () => {
            //delete username, birthday, highscores and leaderboard entry
            this.storage.set('user', {username: null, birthday: null, highscore: 0})

            //delete highscore history
            this.storage.set('highscores', []);

            this.storage.get('leaderboard').then((val) => {
              for(var i = 0; i < val.length; i++){
                //if(val[i].username == this.username){
                //  val.splice(i);
                //  break;
                //}
              }

              this.storage.set('leaderboard', val);
            })

            //return to home page
            this.navCtrl.popToRoot()
          }
        }
      ]
    });

    //show dialog
    alert.present();
  }

}

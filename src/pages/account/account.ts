import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  //values to be displayed on page
  username:string = "TechSupport420";
  birthday:string = "";
  
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public storage: Storage) {
    
    this.loadPreferences();
  }

  //currently not used
  ionViewDidLoad() {
    //console.log('ionViewDidLoad AccountPage');
  }

  loadPreferences(){
    this.storage.get('user').then((val) => {
      if(val.username == null){
        this.username = '';
      }else{
        this.username = val.username;
      }

      if(val.birthday != null){
        this.birthday = val.birthday;
      }

    });
  }

  //on delete button pressed, show deletion comfirmatoin dialog
  onClickDelete(){

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
                if(val[i].username == this.username){
                  val.splice(i);
                  break;
                }
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

  //on save button pressed
  onClickSave(){

    this.storage.set('user', {username: this.username, birthday: this.birthday, highscore: 0})

    this.navCtrl.popToRoot()
  }

  //on cancel button pressed
  onClickCancel(){
    this.navCtrl.popToRoot()
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    //retrieve values from navigation params
    this.username = navParams.data.username;
    this.birthday = navParams.data.birthday;
  }

  //currently not used
  ionViewDidLoad() {
    //console.log('ionViewDidLoad AccountPage');
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
            //TODO actually delete

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
    this.navCtrl.popToRoot()
  }

  //on cancel button pressed
  onClickCancel(){
    this.navCtrl.popToRoot()
  }
}

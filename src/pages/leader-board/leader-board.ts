import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LeaderBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-leader-board',
  templateUrl: 'leader-board.html',
})
export class LeaderBoardPage {

  //dummy leader board list data
  staticLoeaderBoardData = [];
  sortedData = [];
  low = 0;
  table:HTMLTableElement = <HTMLTableElement>document.getElementById("leader_board_table");

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    storage.get("accounts").then((val) => {
      this.staticLoeaderBoardData = val;
      // console.log(this.staticLoeaderBoardData);
    });
    this.sortData();
  }

  sortData(){
    this.low = 0;
    while (this.staticLoeaderBoardData.length != this.sortedData.length){
      for(var i = 0; i<=this.staticLoeaderBoardData.length; i++){
        if (this.staticLoeaderBoardData[i].highscore == this.low){
          this.sortedData.splice(0, 0, this.staticLoeaderBoardData[i]);
        }
      }
      this.low += 1;
      console.log("lol");
    }
  }

  //insert leader board data into the page once html is loaded
  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderBoardPage');
    this.sortData();
    this.populateTable();
  }

  //on back button pressed, pop to root
  onClickBack(){
    this.navCtrl.popToRoot();
  }

  //adds the leader board data to the html table
  populateTable(){
  console.log("what?");
    this.low = 0;
    //for data entry
    while(this.low < this.sortedData.length){

      var row = this.table.insertRow();

      var name = row.insertCell();
      name.innerHTML = <string>this.sortedData[this.low].username;

      var score = row.insertCell();
      score.innerHTML = <string>this.sortedData[this.low].highscore;
      console.log("in");
      console.log("between");
      this.low += 1;
    }
  }
}

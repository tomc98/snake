import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  staticLoeaderBoardData = [
    ["Jennifer",	"121"],
    ["Amy",	"117"],
    ["Joseph",	"117"],
    ["Robert",	"117"],
    ["Amba",	"111"],
    ["Matthew",	"110"],
    ["James",	"108"],
    ["Jason",	"108"],
    ["Justin",	"107"],
    ["Stephanie",	"107"],
    ["Lauren",	"105"],
    ["Melissa",	"103"],
    ["Daniel",	"101"],
    ["Joshua",	"99"],
    ["Sarah",	"99"],
    ["David",	"97"],
    ["Amanda",	"89"],
    ["Nicole",	"83"],
    ["Ashly",	"82"],
    ["John",	"70"],
    ["Andrew",	"32"],
    ["Jessica",	"32"],
    ["Micheal",	"32"]
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //insert leader board data into the page once html is loaded
  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderBoardPage');

    this.populateTable();
  }
  
  //on back button pressed, pop to root
  onClickBack(){
    this.navCtrl.popToRoot()
  }

  //adds the leader board data to the html table
  populateTable(){
    var table:HTMLTableElement = <HTMLTableElement>document.getElementById("leader_board_table");

    //for data entry
    this.staticLoeaderBoardData.forEach(element => {
      
      var row = table.insertRow();

      var name = row.insertCell();
      name.innerHTML = <string>element[0]; 

      var score = row.insertCell();
      score.innerHTML = <string>element[1]; 

    });
  }
}

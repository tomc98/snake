import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Chart } from 'chart.js';

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
  @ViewChild('scoreChart') canvas;
  chart: any;
  //dummy leader board list data
  staticLoeaderBoardData = [];
  indexOfCurrentPlayer;
  currentPlayer;
  playerScores = [];
  playerScoreDates = [];

  //gets the current user and stores it
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    storage.get("activeuser").then((val) => {
      this.indexOfCurrentPlayer = val;
    });

    //get all the account data and stores it
    storage.get("accounts").then((val) => {
      this.staticLoeaderBoardData = val;
      //now we always have the current player stuff, even after account data
      this.currentPlayer = this.staticLoeaderBoardData[this.indexOfCurrentPlayer];
      //sorts the leader board
      this.staticLoeaderBoardData = this.staticLoeaderBoardData.sort(function(a, b){return b.highscore - a.highscore});
      //runs chart function
      this.displayChart();
      console.log(this.staticLoeaderBoardData);
    });
  }

  //displays chart and adds data to it
  displayChart(){
  //get the current player's highscore history along with dates
    for (var i = 0; i < this.currentPlayer.highscorehistory.length; i++){
      this.playerScores.push(this.currentPlayer.highscorehistory[i].highscore);

      var datetime = new Date(this.currentPlayer.highscorehistory[i].datetime);
      this.playerScoreDates.push(datetime.getDate() + "/" + (datetime.getMonth()+1));
    }

    //specifies what is to be displayed and how
    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.playerScoreDates,
        datasets:[{
          label:'scores',
          data: this.playerScores,
        }]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
      }
    });
  }

  //insert leader board data into the page once html is loaded
  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderBoardPage');
  }

  //on back button pressed, pop to root
  onClickBack(){
    this.navCtrl.popToRoot();
  }
}

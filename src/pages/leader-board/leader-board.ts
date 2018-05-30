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

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    storage.get("activeuser").then((val) => {
      this.indexOfCurrentPlayer = val;
    });

    storage.get("accounts").then((val) => {
      this.staticLoeaderBoardData = val;
      this.currentPlayer = this.staticLoeaderBoardData[this.indexOfCurrentPlayer];
      this.staticLoeaderBoardData = this.staticLoeaderBoardData.sort(function(a, b){return b.highscore - a.highscore});
      this.displayChart();
      console.log(this.staticLoeaderBoardData);
    });
  }

  displayChart(){
    for (var i = 0; i < this.currentPlayer.highscorehistory.length; i++){
      this.playerScores.push(this.currentPlayer.highscorehistory[i].highscore);

      var datetime = new Date(this.currentPlayer.highscorehistory[i].datetime);
      this.playerScoreDates.push(datetime.getDate() + "/" + (datetime.getMonth()+1));
    }
    
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

  //adds the leader board data to the html table
  populateTable(){

  }
}

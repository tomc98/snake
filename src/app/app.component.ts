import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { Camera } from '@ionic-native/camera';
//import { HomePage } from '../pages/home/home';
import { HomePage } from '../pages/home/home';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage: Storage) {
    platform.ready().then(() => {
      
      //leaderboard holds all users highscore as:
      //[
      //  {username:'name', score:x},
      //  ...
      //]
      storage.get('leaderboard').then((val) => {
        if(val == null){
          storage.set('leaderboard', []);
        }
      });

      //highscores holds the current users highscore history as:
      //[
      //  {datetime:x, score, y},
      //  ...
      //]
      storage.get('highscorehistory').then((val) => {
        if(val == null){
          storage.set('highscorehistory', []);
        }
      });

      //user holds user settings as:
      //{username: name, birthday: bday}
      storage.get('user').then((val) => {
        if(val == null){
          storage.set('user', {username: null, birthday: null, highscore: 0});
        }
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

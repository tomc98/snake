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
      
      // accounts holds a list of all accounts
      // [
      //   {
      //     username:'name', 
      //     birthday:'bday', 
      //     avatar:image, 
      //     highscore:x, 
      //     highscorehistory:[
      //       {
      //         datetime:time,
      //         highscore:x
      //       },
      //       ...
      //     ]
      //   },
      //   ...
      // ]
      storage.get('accounts').then((val) => {
        if(val == null){
          var defaultUser = {
            username: 'player1',
            birthday: new Date().toISOString(),
            avatar: null,
            highscore: 0,
            highscorehistory: [
              {datetime: new Date().toISOString(), highscore: 0}
            ]
          };
          storage.set('accounts', [defaultUser]);
          storage.set('activeuser', 0);
        }else{
          storage.get('activeuser').then((val) => {
            if(val == null){
              storage.set('activeuser', null);
            }
          });
        }
      });

      // holds id (index) of current user
      storage.get('activeuser').then((val) => {
        if(val == null){
          storage.set('activeuser', null);
        }
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GamePage } from '../pages/game/game';
import { HowToPage } from '../pages/how-to/how-to';
import { LostPage } from '../pages/lost/lost';
import { LeaderBoardPage } from '../pages/leader-board/leader-board';
import { AccountPage } from '../pages/account/account';
//import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import { IonicStorageModule } from '@ionic/storage';

import { NativeAudio } from '@ionic-native/native-audio';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GamePage,
    HowToPage,
    LostPage,
    LeaderBoardPage,
    AccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GamePage,
    HowToPage,
    LostPage,
    LeaderBoardPage,
    AccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //SmartAudioProvider
    NativeAudio
  ]
})
export class AppModule {}

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RegisterPage } from '../pages/register/register';
import { MainPage } from '../pages/main/main';
import { QueuePage } from '../pages/queue/queue';
import { HistoryPage } from '../pages/history/history';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import {TranslateService} from '@ngx-translate/core';
import { CanclePage } from '../pages/cancle/cancle';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ProfilePage;

  constructor(private translate: TranslateService,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    this.translate.setDefaultLang('th');
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
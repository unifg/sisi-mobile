import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from './../pages/login/login';
=======

// import { TabsPage } from '../pages/tabs/tabs';
import { TabsPage } from '../pages/tabs/tabs';
>>>>>>> d28e9d699e821ea93abdff14af322ec0d0fee1e9

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

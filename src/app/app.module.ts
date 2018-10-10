import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

<<<<<<< HEAD
import { AboutPage }    from '../pages/about/about';
import { ContactPage }  from '../pages/contact/contact';
import { HomePage }     from '../pages/home/home';
import { TabsPage }     from '../pages/tabs/tabs';
=======
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
>>>>>>> 0aa5741d00c42c8475eab4b7bf2f0ca577718d29

import { LoginPage }    from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD
import { FeedPageModule } from '../pages/feed/feed.module';
import { OcorrenciaPageModule } from '../pages/ocorrencia/ocorrencia.module';
import { OcorrenciaPage } from '../pages/ocorrencia/ocorrencia';
=======
import { RegisterPerfilPageModule } from '../pages/registerPerfil/registerPerfil.module';
import { RegisterPageModule } from '../pages/register/register.module';



>>>>>>> 0aa5741d00c42c8475eab4b7bf2f0ca577718d29

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
    
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
<<<<<<< HEAD
    FeedPageModule,
    OcorrenciaPageModule
    
=======
    RegisterPerfilPageModule,
    RegisterPageModule

>>>>>>> 0aa5741d00c42c8475eab4b7bf2f0ca577718d29
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
<<<<<<< HEAD
=======
    LoginPage

>>>>>>> 0aa5741d00c42c8475eab4b7bf2f0ca577718d29
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

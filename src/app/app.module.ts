
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';
import { RegisterPerfilPage } from '../pages/registerPerfil/registerPerfil';
import { IrregularidadesPage } from './../pages/irregularidades/irregularidades';

import { RegisterPage }       from '../pages/register/register';
import { FeedPage }           from '../pages/feed/feed';
import { OcorrenciaPage }     from '../pages/ocorrencia/ocorrencia';

import { IrregularidadesProvider } from '../providers/irregularidades/irregularidades';
import { RegisterProvider }   from '../providers/register/register';
import { AuthProvider }       from '../providers/auth/auth';
import { UserProvider }       from '../providers/user/user';
// import { TokenInterceptor }   from "../providers/auth/token-interceptor";
import { OccurrenceProvider } from '../providers/occurrence/occurrence';

import { HttpService } from "../http-service/http.service";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPerfilPage,
    RegisterPage,
    FeedPage,
    OcorrenciaPage,
    IrregularidadesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPerfilPage,
    RegisterPage,
    FeedPage,
    OcorrenciaPage,
    IrregularidadesPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpService,
    StatusBar,
    SplashScreen,
    Geolocation,
    RegisterProvider,
    AuthProvider,
    UserProvider,
    IrregularidadesProvider,
    Camera,
    OccurrenceProvider
  ]
})
export class AppModule { }

import { Component } from '@angular/core';
<<<<<<< HEAD:src/pages/ocorrencia/ocorrencia.ts
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
=======
import { AlertController, App, LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
>>>>>>> 0aa5741d00c42c8475eab4b7bf2f0ca577718d29:src/pages/login/login.ts

/**
 * Generated class for the OcorrenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ocorrencia',
  templateUrl: 'ocorrencia.html',
})
<<<<<<< HEAD:src/pages/ocorrencia/ocorrencia.ts
export class OcorrenciaPage {
=======
export class LoginPage {

  public loginForm: any;
  public backgroundImage = '../assets/img/background/globalbackground.jpg';

  tabsPage = TabsPage;
>>>>>>> 0aa5741d00c42c8475eab4b7bf2f0ca577718d29:src/pages/login/login.ts

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App
  ) { }

  login() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Logged in!',
        subTitle: 'Thanks for logging in.',
        buttons: ['Dismiss']
      });
      alert.present();
    });

    loading.present();

  }

  goToRegisterPage() {
    this.navCtrl.push(RegisterPage);
  }

<<<<<<< HEAD:src/pages/ocorrencia/ocorrencia.ts
  ionViewDidLoad() {
    console.log('ionViewDidLoad OcorrenciaPage');
  }

  public goToFeed() {
    this.navCtrl.pop()
=======
  goToResetPassword() {
    // this.navCtrl.push(ResetPasswordPage);
>>>>>>> 0aa5741d00c42c8475eab4b7bf2f0ca577718d29:src/pages/login/login.ts
  }


  public confirmar() {
    alert("Dados Enviados!")
  }
}

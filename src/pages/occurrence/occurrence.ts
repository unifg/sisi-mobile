import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, App } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the OcorrenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ocorrencia',
  templateUrl: 'occurrence.html',
})
export class OccurrencePage {

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    private toastCtrl: ToastController

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


  ionViewDidLoad() {
    console.log('ionViewDidLoad OcorrenciaPage');
  }

  goToFeed() {
    this.navCtrl.pop()
  }


  confirmar() {
    const toast = this.toastCtrl.create({
      message: 'Dados enviados',
      position: 'bottom',
      duration: 5000
    });  }
}

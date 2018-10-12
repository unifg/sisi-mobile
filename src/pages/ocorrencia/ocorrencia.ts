import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';

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
export class OcorrenciaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OcorrenciaPage');
  }

  public goToFeed(){
    this.navCtrl.setRoot(FeedPage)
  }

  public confirmar(){
    alert("Dados Enviados!")
  }
  

}
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OcorrenciaPage } from '../ocorrencia/ocorrencia';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  goToOcorrencia() {
    this.navCtrl.push(OcorrenciaPage)
  }



  //let date = "03-11-2014";
  //let newdate = date.split("-").reverse().join("-");
}

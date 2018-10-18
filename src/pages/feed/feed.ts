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

  goToOcorrencia(id) {
    
    if(id) {
      this.navCtrl.push(OcorrenciaPage, {
        occurrence_id: id
      });
    }
  }
}

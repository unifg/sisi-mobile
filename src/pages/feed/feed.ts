import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OcorrenciaPage } from '../ocorrencia/ocorrencia';
import { OcorrenciaPageModule } from '../ocorrencia/ocorrencia.module';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  public get id_ocorrences(){
    return this.id_ocorrences;
  }
  public goToOcorrencia(id_ocorrences)
  {
        this.navCtrl.push(OcorrenciaPage,{"id_ocorrencia":id_ocorrences});
  }

}

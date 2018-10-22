import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OccurrencePage } from '../occurrence/occurrence';
import { OccurrencePageModule } from '../occurrence/occurrence.module';
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

  goToOcorrencia() {
    this.navCtrl.push(OccurrencePage)
  }



  //let date = "03-11-2014";
  //let newdate = date.split("-").reverse().join("-");
}

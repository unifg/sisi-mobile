import { IrregularitiesPage } from './../irregularities/irregularities'
import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'


@IonicPage()
@Component({
  selector: 'page-irregularities-card',
  templateUrl: 'irregularities-card.html'
})
export class IrregularitiesCardPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,


    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IrregularitiesCardPage')
  }

  goToIrregularitiesPage() {
    this.navCtrl.push(IrregularitiesPage)
  }
}

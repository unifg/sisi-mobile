import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { utils } from '../../util/util'


/**
 * Generated class for the IrregularidadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-irregularidades',
  templateUrl: 'irregularidades.html',
})
export class IrregularidadesPage {

  base64Image: string
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  takePhoto() {
    this.base64Image = utils.getPicture()
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad IrregularidadesPage');
  }

}

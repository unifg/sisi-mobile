import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


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
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  imgSrc = ''
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  getPicture() {
    this.camera.getPicture(this.options).then((data) => {
      this.imgSrc = data
    }, (err) => {
      console.log(err)
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IrregularidadesPage');
  }

}

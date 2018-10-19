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

  base64Image: string
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  getPicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
    this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Tratar erro.
    })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad IrregularidadesPage');
  }

}

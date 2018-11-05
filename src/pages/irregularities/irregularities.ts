import { IIregularities } from './../../interfaces/IIregularities';
import { IrregularitiesProvider } from './../../providers/irregularities/irregularities';
import { IrregularitiesCardPage } from './../irregularities-card/irregularities-card';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
<<<<<<< HEAD
import { TabsPage } from '../tabs/tabs';
import { FormBuilder, Validators }                                                                  from "@angular/forms";

=======
>>>>>>> 88da6eafebd886bf9b71c14a6abecdf5a5a40b8d

declare let google: any;

@IonicPage()
@Component({
  selector: 'page-irregularities',
  templateUrl: 'irregularities.html',
})


export class IrregularitiesPage {

  @ViewChild('map') map: ElementRef;

  private marker: any;
  private lat: number;
  private lng: number;
<<<<<<< HEAD
  private base64Image: string;
  private irregularitiesForm: any;
=======
  private base64Image: string
  private irregularitie_id: number
  private title: string
  private story: string
>>>>>>> 88da6eafebd886bf9b71c14a6abecdf5a5a40b8d

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private irregularitiesProvider: IrregularitiesProvider,
<<<<<<< HEAD
    private camera: Camera,
  ) {}
=======
    private camera: Camera
  ) {
    this.irregularitie_id = navParams.get('irregularitie_id')
    console.log(this.irregularitie_id)
  }
>>>>>>> 88da6eafebd886bf9b71c14a6abecdf5a5a40b8d

  ionViewDidLoad() {
    console.log('ionViewDidLoad Irregularities Page');
    this.geolocation.getCurrentPosition().then(pos => {
      const position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

      const options = {
        center: position,
        zoom: 18,
        myTipyId: 'roadmap'
      };
      this.lat = pos.coords.latitude
      this.lng = pos.coords.longitude
      const map = new google.maps.Map(this.map.nativeElement, options);
      this.marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        draggable: true,
        position: position,
        map: map,
        title: 'Você está aqui!'
      });
      console.log('so far so good');

    }).catch(err => console.log('hm', err));
  }

  getPosition() {
    let result = '';
    if (this.marker) {
      const coordinate = this.marker.getPosition();
      const lat = coordinate.lat();
      const lng = coordinate.lng();

      this.lat = lat;
      this.lng = lng;
      result = `lat: ${lat.toFixed(5)}, lng: ${lng.toFixed(5)}`;
    }
    return result;
  }

  goToIrregularitiesCard() {
    this.navCtrl.setRoot(IrregularitiesCardPage);
  }

  save() {
    let loading = this.loadingCtrl.create({
      content: 'Aguarde, por favor...'
    });

    const toast = this.toastCtrl.create({
      message: 'Não foi possível registrar a essa irregularidade, verifique os dados informados!',
      position: 'top',
      duration: 5000
    });

    const success = this.toastCtrl.create({
      message: 'Irregularidade cadastrada com sucesso!',
      position: 'top',
      duration: 5000
    });

    let irregularitie: IIregularities = {
      title: this.title,
      story: this.story,
      coordinates: `${this.lat.toFixed(5)}, ${this.lng.toFixed(5)}`,
      zone_id: 1,
      irregularity_type_id: this.irregularitie_id
    }
    this.irregularitiesProvider.saveIrregularitie(irregularitie).subscribe(res => {
      loading.dismissAll();
      success.present();
    }, error => {
      console.log("Erro" + error.message);
      loading.dismissAll();
      toast.present();
    });
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

}

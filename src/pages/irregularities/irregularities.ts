import { IrregularitiesCardPage } from './../irregularities-card/irregularities-card';
import { Component, ViewChild, ElementRef }                                                           from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController  }  from 'ionic-angular';
import { Geolocation }                                                                                from '@ionic-native/geolocation';
import { TabsPage }                                                                                   from '../tabs/tabs';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, private toastCtrl: ToastController,
    public alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OccurrencePage');
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


    }).catch(err => console.log(err));

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

}

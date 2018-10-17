import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, App } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { FeedPage }    from '../feed/feed';
import { TabsPage }    from '../tabs/tabs';

declare let google: any;

@IonicPage()
@Component({
  selector: 'page-ocorrencia',
  templateUrl: 'ocorrencia.html',
})
export class OcorrenciaPage {

  @ViewChild('map') map: ElementRef;

  private marker: any;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation) {}

  getPosition() {
    let result = '';
    if (this.marker) {
        const coordinate = this.marker.getPosition();
        const lat = coordinate.lat();
        const lng = coordinate.lng();
        result = `lat: ${lat.toFixed(3)}, lng: ${lng.toFixed(3)}`;
    }
    return result;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OcorrenciaPage');
    this.geolocation.getCurrentPosition().then( pos => {
      const position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

      const options = {
        center: position,
        zoom: 18,
        myTipyId: 'roadmap'
      };

      const map = new google.maps.Map(this.map.nativeElement, options);
      this.marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        draggable:true,
        position: position,
        map: map,
        title: 'Você está aqui!'
      });


    }).catch( err => console.log(err));
    
  
  }

  goToFeed() {
    this.navCtrl.setRoot(FeedPage)
  }

  registerOccurrence() {
    this.navCtrl.setRoot(TabsPage);
  }
  
}

import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, App } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from '../home/home';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-ocorrencia',
  templateUrl: 'ocorrencia.html',
})
export class OcorrenciaPage {
  @ViewChild('map') map: ElementRef;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation  ) {}


    

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
      var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: 'Você está aqui!'
      });


    }).catch( err => console.log(err));
    
  
  }

  goToFeed() {
    this.navCtrl.setRoot(FeedPage)
  }


  public confirmar() {
    alert("Dados Enviados!")
    this.navCtrl.setRoot(HomePage)
  }

  
  
}

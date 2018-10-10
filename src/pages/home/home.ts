import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'
import { LoginPage } from '../login/login';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') map: ElementRef;



  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

  ionViewDidLoad(){
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
  logOut(){
    this.navCtrl.setRoot(LoginPage)
 }

}

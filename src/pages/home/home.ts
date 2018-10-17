import { FeedPage } from './../feed/feed';

import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'
import { LoginPage } from '../login/login';

declare let google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') map: ElementRef;

  private marker: google.maps.Marker;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
  }

  public getPosition(){
    return this.marker.getPosition()
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
      this.marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: position,
        map: map,
        title: 'Você está aqui!'
      });


    }).catch( err => console.log(err));

  }
  logOut(){
    this.navCtrl.setRoot(LoginPage)
  }

  goToFeedPage() {
    this.navCtrl.push(FeedPage);
  }
}



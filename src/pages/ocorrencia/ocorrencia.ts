import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { FeedPage }    from '../feed/feed';
import { TabsPage }    from '../tabs/tabs';
import { OccurrenceProvider } from '../../providers/occurrence/occurrence';

declare let google: any;

@IonicPage()
@Component({
  selector: 'page-ocorrencia',
  templateUrl: 'ocorrencia.html',
})
export class OcorrenciaPage {

  @ViewChild('map') map: ElementRef;

  private marker: any;
  public occurrence_id: number;
  private lat: number;
  private lng: number;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation) {
      this.occurrence_id = navParams.get('occurrence_id');
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

  registerOccurrence() {
    let user = {
      title:                this.userForm.controls.name.value,
      story:                this.userForm.controls.cpf.value,
      occurrence_date:      this.userForm.controls.email.value,
      occurrence_time:      this.userForm.controls.password.value,
      coordinates:          this.userForm.controls.birthdate.value,
      police_report:        this.userForm.controls.gender.value,
      occurrence_type_id:   this.userForm.controls.cellphone.value,
      zone_id:              this.userForm.controls.phone.value,
    }
    this.occurrence_provider.addUser(user).subscribe(res =>{
      this.registerProvider.registerUser(user);
      this.presentToast();
      this.navCtrl.pop();
    }, erro => {
      console.log("Erro: " + erro.message);
    });
  }
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

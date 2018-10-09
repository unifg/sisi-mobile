import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the Register2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registerPerfil',
  templateUrl: 'registerPerfil.html',
})
export class RegisterPerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToRegisterPage(){
    this.navCtrl.push(RegisterPage)
  }
  

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPerfilPage } from '../registerPerfil/registerPerfil';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {
    name: '',
    cpf: null,
    email: '',
    password: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, ) {

  }
  goToRegisterPerfilPage() {
    // this.navCtrl.push(RegisterPerfilPage)
    console.log(this.user)
  }

  goToLoginPage() {
    this.navCtrl.push(LoginPage)
  }

}

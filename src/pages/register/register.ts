import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators} from '@angular/forms';
import { RegisterPerfilPage } from '../registerPerfil/registerPerfil';
import { LoginPage } from '../login/login';
import { RegisterProvider } from '../../providers/register/register'


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public userForm: any
  user = {

  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private registerProvider: RegisterProvider,
    private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      cpf: [null, Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      cellphone: ['', Validators.required],
      status: ['ATIVO', Validators.required],
      skin_color: ['', Validators.required]
    })
  }

  goToRegisterPerfilPage() {
    console.log(this.userForm.controls)
    // this.registerProvider.registerUser(this.userForm)
    // this.navCtrl.push(RegisterPerfilPage)
  }

  goToLoginPage() {
    this.navCtrl.push(LoginPage)
  }

}

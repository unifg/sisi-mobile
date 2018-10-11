import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterPerfilPage } from '../registerPerfil/registerPerfil';
import { LoginPage } from '../login/login';
import { RegisterProvider } from '../../providers/register/register'
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public userForm: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private registerProvider: RegisterProvider,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      cpf: [null, Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      cellphone: ['', Validators.required],
      status: ['ATIVO', Validators.required],
      skin_color: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  goToRegisterPerfilPage() {
    let user = {
      name: this.userForm.controls.name.value,
      cpf: this.userForm.controls.cpf.value,
      email: this.userForm.controls.email.value,
      password: this.userForm.controls.password.value,
      birthdate: this.userForm.controls.birthdate.value,
      gender: this.userForm.controls.gender.value,
      cellphone: this.userForm.controls.cellphone.value,
      status: this.userForm.controls.status.value,
      skin_color: this.userForm.controls.skin_color.value
    }
    this.registerProvider.registerUser(user)
    // this.navCtrl.push(RegisterPerfilPage)
    this.presentToast()
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Usuário criado com sucesso',
      duration: 3000,
      position: 'bottom'
    })

    toast.onDidDismiss(() => {
      console.log('Chamar o home');
    })

    toast.present()
  }

  goToLoginPage() {
    this.navCtrl.push(LoginPage)
  }

}

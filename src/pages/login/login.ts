import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, App, LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user'
import { IUser } from '../../interfaces/IUser'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user:IUser = {email:'',password:''};

  public userForm: any
  public loginForm: any;
  public backgroundImage = '../assets/img/background/globalbackground.jpg';
  tabsPage = TabsPage;

   constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    public authProvider: AuthProvider,
    public userProvider: UserProvider


  ) {

    this.userForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Usuário Logado',
      duration: 3000,
      position: 'bottom'
    });
  }

  authUser() {
    this.authProvider.authUser(this.userForm.controls.email.value, this.userForm.controls.password.value).subscribe(res =>{
      console.log(this.user);
      this.presentToast();
      }, erro => {
      console.log("Erro" + erro.message);
    });
  }

  goToRegisterPage() {
    this.navCtrl.push(RegisterPage);
  }
}

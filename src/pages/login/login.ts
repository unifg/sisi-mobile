import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, App, LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


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
    private authProvider: AuthProvider

  ) {

    this.userForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    })
  }



  getLogin() {
    //   const loading = this.loadingCtrl.create({
    //     duration: 500
    //   });



    //   loading.onDidDismiss(() => {
    //     const alert = this.alertCtrl.create({
    //       title: 'Logged in!',
    //       subTitle: 'Thanks for logging in.',
    //       buttons: ['Dismiss']
    //     });
    //     alert.present();
    //   });

    //   loading.present();
    this.authProvider.authUser(this.userForm.controls.email.value, this.userForm.controls.password.value)


  }


  goToRegisterPage() {
    this.navCtrl.push(RegisterPage);
  }

  goToResetPassword() {
    // this.navCtrl.push(ResetPasswordPage);
  }

}

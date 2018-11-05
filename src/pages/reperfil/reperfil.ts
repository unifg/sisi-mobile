import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { RegisterProvider } from '../../providers/register/register';
import { UserProvider } from '../../providers/user/user';
import { ToastController } from 'ionic-angular';
import { IUser } from '../../interfaces/IUser';

@IonicPage()
@Component({
  selector: 'page-reperfil',
  templateUrl: 'reperfil.html',
})
export class ReperfilPage {
  user: IUser = { name: '', cpf: '', email: '', password: '', gender: '', skin_color: '', cellphone: '', phone: '', birthdate: '' };
  
  registerForm: FormGroup;
  loading = false;
  submitted;

  //validator patterns

  cellpPattern = '^((\\+91-?)|0)?[0-9]{11}$';
  telePattern = '^((\\+91-?)|0)?[0-9]{11}$';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private registerProvider: RegisterProvider,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    public userProvider: UserProvider
  ) {
    this.registerForm = this.formBuilder.group({
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      cellphone: ['', [Validators.required, Validators.pattern(this.cellpPattern)]],
      telefone: ['', [Validators.required, Validators.pattern(this.telePattern)]],
      status: ['ATIVO', Validators.required],
      skin_color: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
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
  addUser() {
    let user = {
      name: this.registerForm.controls.name.value,
      cpf: this.registerForm.controls.cpf.value,
      email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value,
      birthdate: this.registerForm.controls.birthdate.value,
      gender: this.registerForm.controls.gender.value,
      cellphone: this.registerForm.controls.cellphone.value,
      telefone:this.registerForm.controls.telefone.value,
      status: this.registerForm.controls.status.value,
      skin_color: this.registerForm.controls.skin_color.value
    }
    this.userProvider.addUser(user).subscribe(res => {
      this.registerProvider.registerUser(user);
      this.presentToast();
      this.navCtrl.pop();
    }, erro => {
      console.log("Erro: " + erro.message);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReperfilPage');
  }

}

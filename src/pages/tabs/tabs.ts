import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
<<<<<<< HEAD
import { FeedPage } from '../feed/feed';
import { OcorrenciaPage } from '../ocorrencia/ocorrencia';
=======
import {  RegisterPage } from '../register/register';
import { RegisterPerfilPage } from '../registerPerfil/registerPerfil';
>>>>>>> 0aa5741d00c42c8475eab4b7bf2f0ca577718d29

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
<<<<<<< HEAD
  tab4Root = FeedPage;
  tab5Root = OcorrenciaPage;
=======
  tab4Root = RegisterPage;
  tab5Root = RegisterPerfilPage

  
>>>>>>> 0aa5741d00c42c8475eab4b7bf2f0ca577718d29

  constructor() {

  }
}

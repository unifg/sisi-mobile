import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { OcorrenciaPage } from '../ocorrencia/ocorrencia';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { RegisterPerfilPage } from '../registerPerfil/registerPerfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = FeedPage;
  tab5Root = OcorrenciaPage;
  tab6Root = RegisterPage;
  tab7Root = RegisterPerfilPage
  tab8Root = LoginPage



  constructor() {

  }
}

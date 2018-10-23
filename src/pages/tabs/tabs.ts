import { Component }     from '@angular/core';
import { HomePage }      from '../home/home';
import { FeedPage }      from '../feed/feed';
import { LoginPage }     from "../login/login";
import { NavController } from "ionic-angular";
import { Storage }       from '@ionic/storage';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FeedPage;
  tab4Root = LoginPage;
  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  logout() {
    this.storage.remove('token');
    this.navCtrl.setRoot(LoginPage);
  }
}

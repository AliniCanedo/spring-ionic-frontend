import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //obj inicia vazio para fazer bidding com os campos do form
  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  // metodos padrões para desabilitar 
  // o menu se usuario n estiver "logado"
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login() {
    console.log(this.creds)
    this.navCtrl.setRoot('CategoriasPage');
  }
}

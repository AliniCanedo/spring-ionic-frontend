import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteService } from '../../app/services/domain/cliente.service';
import { StorageService } from '../../app/services/storage.service';
import { API_CONFIG } from '../../config/api.config';
import { ClienteDTO } from '../../models/cliente.dto';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  cliente: ClienteDTO;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public clienteService: ClienteService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email)
        .subscribe(response => {
          this.cliente = response;
          //buscar img
        },
          error => { });
    }
  }
  getImageIfExists() {
    this.clienteService.getImageFromBucket(this.cliente.id)
      .subscribe(response => {
        this.cliente.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.jpg`;
      },
        error => {

        });
  }
}

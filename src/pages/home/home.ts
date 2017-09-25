import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeladosPage } from '../helados/helados';
import { BebidasPage } from '../bebidas/bebidas';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  root: any = HeladosPage;
  menuOpc: Menu[] = [
    
        { label: 'Inicio', icon: 'home' },
        { label: 'Bebidas', icon: 'md-beer' },
        { label: 'Pizza', icon: 'md-pizza' },
        { label: 'Comida', icon: 'md-restaurant' },
        { label: 'Cafes', icon: 'md-pint' },
        { label: 'Bar', icon: 'md-wine' }
    
      ]

  constructor(public navCtrl: NavController, public storage:Storage) {

  }

  setContent(index:number){
    if(index == 0) {
      this.root = HeladosPage;
    }
    else {
      this.root =BebidasPage;
    }
  }

  logout(){
    this.storage.set("logged", false)
    this.navCtrl.setRoot(LoginPage)

  }


}
interface Menu {
  label: string;
  icon: string;
}

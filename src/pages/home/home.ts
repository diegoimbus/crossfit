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
        { label: 'Perfil', icon: 'person' },
        { label: 'Comparar resultados', icon: 'stats' },
        { label: 'Crea un Box', icon: 'add-circle' },

    
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

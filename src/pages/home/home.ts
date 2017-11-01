import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { HeladosPage } from '../helados/helados';
import { BebidasPage } from '../bebidas/bebidas';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { ModificarWodPage } from '../modificar-wod/modificar-wod';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  root: any = HeladosPage;
  menuOpc: Menu[] = [
    
        { label: 'Tus records', icon: 'person' },
        { label: 'Encuentra un box', icon: 'locate' },
        { label: 'Comparar', icon: 'stats' },
        { label: 'Modifica tus resultados', icon: 'refresh-circle' },

    
      ]

  constructor(
     private afAuth: AngularFireAuth,
     private toast: ToastController,
     public navCtrl: NavController, 
     public storage:Storage) {

  }



  setContent(index:number){
    if(index == 0) {
      this.root = HeladosPage;
    }
    else if(index === 1) {
      this.root = BebidasPage
    }
    
    else if(index ==3){
      this.root = ModificarWodPage
    }
    else {
      this.root =HeladosPage;
    }
  }

  logout(){
    this.storage.set("logged", false)
    this.afAuth.auth.signOut()
    this.navCtrl.setRoot(LoginPage)

  }


}
interface Menu {
  label: string;
  icon: string;
}

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

  ionViewWillLoad(){ 
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid){
        this.toast.create({
          message: `BIENVENIDO A C2B, ${data.email}`,
          duration: 3000
        }).present()
      }
      else {
        this.toast.create({
          message: `usuario y/o contraseña incorrectos`,
          duration: 3000
        }).present()
      }
  
    })
  }

  setContent(index:number){
    if(index == 0) {
      this.root = HeladosPage;
    }
    if(index == 1) {
      this.root = BebidasPage
    }
    if(index == 2) {

    }
    if(index ==3){
      this.root = ModificarWodPage
    }
    else {
      this.root =HeladosPage;
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

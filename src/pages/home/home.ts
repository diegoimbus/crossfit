import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { HeladosPage } from '../helados/helados';
import { BebidasPage } from '../bebidas/bebidas';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from 'angularfire2/auth';

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

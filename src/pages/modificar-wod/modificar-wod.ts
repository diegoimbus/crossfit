import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Helado } from '../../providers/helados-data/helado';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { Profile } from '../../models/profile';

@Component({
  selector: 'page-modificar-wod',
  templateUrl: 'modificar-wod.html',
})
export class ModificarWodPage {

  wod = {} as Profile


  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase, 
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificarWodPage');
  }

  createProfile(){
    this.afAuth.authState.subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).set(this.wod)
        .then(() => this.navCtrl.setRoot(HomePage))
    })
  }
}

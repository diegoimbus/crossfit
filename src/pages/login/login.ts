import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { SignupPage } from '../signup/signup';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async authF(user: User){
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      if (result){
        alert("registro exitoso")
        this.login()
      }

    }
    catch (e) {
      console.log(e)
    }
  }
 
  login() {
    this.storage.set("logged", true);
    this.navCtrl.setRoot(HomePage);
  }

  signup() {
    this.navCtrl.push(SignupPage)
  }

}

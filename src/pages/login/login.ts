import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { SignupPage } from '../signup/signup';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HeladosPage } from '../helados/helados';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User

  constructor(
    private afAuth: AngularFireAuth,
    public facebook: Facebook,
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async authF(user: User){
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      if (result){
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

facebookLogin(): Promise<any> {
  
  return this.facebook.login(['email'])
    .then( response => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
        .then( success => { 
          //console.log("Firebase success: " + JSON.stringify(success));
          this.login() 
        });

    }).catch((error) => { console.log(error) });
}

}

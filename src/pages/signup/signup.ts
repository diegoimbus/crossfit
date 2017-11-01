import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  login() {
    this.navCtrl.push(LoginPage)
  }

  async signup(user: User){
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then((res)=>{console.log(`el usuario se ha creado correctamente`)})
      console.log(result)
    }
    catch(e){
      console.log(e)
    }

    this.navCtrl.push(LoginPage)
  }



}

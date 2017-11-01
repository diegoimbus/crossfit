import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HeladosDataProvider } from '../../providers/helados-data/helados-data';
import { Helado } from '../../providers/helados-data/helado';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Profile } from '../../models/profile';
import { ModSnatchPage } from '../mod-snatch/mod-snatch';
import { ModPage } from '../mod/mod';
import { ModDeadliftPage } from '../mod-deadlift/mod-deadlift';
import { ModBackSquatPage } from '../mod-back-squat/mod-back-squat';
import { ModFranPage } from '../mod-fran/mod-fran';
import { ModIsabelPage } from '../mod-isabel/mod-isabel';
import { ModGracePage } from '../mod-grace/mod-grace';
import { ModCindyPage } from '../mod-cindy/mod-cindy';
import * as firebase from 'firebase';



@Component({
  selector: 'page-helados',
  templateUrl: 'helados.html',
})
export class HeladosPage {

helados:Helado[]=[];

someTextUrl:string
snatchUrl:string
deadliftUrl:string
backsquatUrl:string
franUrl:string
isabelUrl:string
graceUrl:string
cindyUrl:string

profileData: FirebaseObjectObservable<Profile>

  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private afDatabase: AngularFireDatabase, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public service: HeladosDataProvider) {
    this.helados = service.data;
    this.getSomeText()
    this.getSnatchPhoto()
    this.getDeadliftPhoto()
    this.getBackSquatPhoto()
    this.getFranPhoto()
    this.getIsabelPhoto()
    this.getGracePhoto()
    this.getCindyPhoto()
  }

  ionViewWillLoad(){ 
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid){
        this.toast.create({
          message: `BIENVENIDO A C2B, ${data.email}`,
          duration: 3000
        }).present()

        this.profileData = this.afDatabase.object(`profile/${data.uid}`)
      }
      else {
        this.toast.create({
          message: `ha cerrado sesión`,
          duration: 3000
        }).present()
      }
  
    })
  }

  mod(){
    this.navCtrl.push(ModPage)
  }

  getSomeText() {
    firebase.storage().ref().child(`pictures/${this.afAuth.auth.currentUser.uid}/myPhotoClean`).getDownloadURL()
      .then(response => this.someTextUrl = response)
      .catch(error => console.log('error', error))
  }

  modSnatch(){
    this.navCtrl.push(ModSnatchPage)
    
  }

  getSnatchPhoto(){
    firebase.storage().ref().child(`pictures/${this.afAuth.auth.currentUser.uid}/myPhotoSnatch`).getDownloadURL()
    .then(res => this.snatchUrl = res)
    .catch(error => console.log('error', error))
  }

  modDeadlift(){
    this.navCtrl.push(ModDeadliftPage)
  }

  getDeadliftPhoto(){
    firebase.storage().ref().child(`pictures/${this.afAuth.auth.currentUser.uid}/myPhotoDeadlift`).getDownloadURL()
    .then(res => this.deadliftUrl = res)
    .catch(error => console.log('error', error))
  }

  modBackSquat(){
    this.navCtrl.push(ModBackSquatPage)
  }

  getBackSquatPhoto(){
    firebase.storage().ref().child(`pictures/${this.afAuth.auth.currentUser.uid}/myPhotoBackSquat`).getDownloadURL()
    .then(res => this.backsquatUrl = res)
    .catch(error => console.log('error', error))
  }

  modFran(){
    this.navCtrl.push(ModFranPage)
  }

  getFranPhoto(){
    firebase.storage().ref().child(`pictures/${this.afAuth.auth.currentUser.uid}/myPhotoFran`).getDownloadURL()
    .then(res => this.franUrl = res)
    .catch(error => console.log('error', error))
  }

  modIsabel(){
    this.navCtrl.push(ModIsabelPage)
  }

  getIsabelPhoto(){
    firebase.storage().ref().child(`pictures/${this.afAuth.auth.currentUser.uid}/myPhotoIsabel`).getDownloadURL()
    .then(res => this.isabelUrl = res)
    .catch(error => console.log('error', error))
  }

  modGrace(){
    this.navCtrl.push(ModGracePage)
  }

  getGracePhoto(){
    firebase.storage().ref().child(`pictures/${this.afAuth.auth.currentUser.uid}/myPhotoGrace`).getDownloadURL()
    .then(res => this.graceUrl = res)
    .catch(error => console.log('error', error))
  }

  modCindy(){
    this.navCtrl.push(ModCindyPage)
  }

  getCindyPhoto(){
    firebase.storage().ref().child(`pictures/${this.afAuth.auth.currentUser.uid}/myPhotoCindy`).getDownloadURL()
    .then(res => this.franUrl = res)
    .catch(error => console.log('error', error))
  }
}

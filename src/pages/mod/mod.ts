import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { HomePage } from '../home/home';
import { storage } from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-mod',
  templateUrl: 'mod.html',
})
export class ModPage {

  clean = {} as Profile

  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private camera: Camera,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModPage');
  }

  modClean(clean: Profile){
    this.afAuth.authState.subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).update(this.clean)
        .then(() => this.navCtrl.setRoot(HomePage))
    })
  }



  async takePhoto(){
    try {
      const options: CameraOptions = {
        quality: 50,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true
      }
  
      const result = await this.camera.getPicture(options)

      const image = `data:image/jpeg;base64,${result}`

      const pictures = storage().ref(`pictures/${this.afAuth.auth.currentUser.uid}/myPhotoClean`)
      pictures.putString(image, 'data_url')
      

    } catch (e){
      console.log(e)
    }

    this.navCtrl.push(HomePage)

  }

}

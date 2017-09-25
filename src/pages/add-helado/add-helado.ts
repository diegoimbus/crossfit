import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Helado } from '../../providers/helados-data/helado';
import { HeladosDataProvider } from '../../providers/helados-data/helados-data';

/**
 * Generated class for the AddHeladoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-helado',
  templateUrl: 'add-helado.html',
})
export class AddHeladoPage {

  helado: Helado;

  constructor(public  navCtrl: NavController, public navParams: NavParams, public service:HeladosDataProvider) {
    this.helado = new Helado("",0,0,"");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHeladoPage');
  }

  save() {
    this.service.data.splice(0,0,this.helado);
    this.navCtrl.pop();
    
  }
}

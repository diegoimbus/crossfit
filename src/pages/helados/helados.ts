import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HeladosDataProvider } from '../../providers/helados-data/helados-data';
import { Helado } from '../../providers/helados-data/helado';
import { AddHeladoPage } from '../add-helado/add-helado';



@Component({
  selector: 'page-helados',
  templateUrl: 'helados.html',
})
export class HeladosPage {

helados:Helado[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: HeladosDataProvider) {
    this.helados = service.data;
  }

   ionViewDidLoad() {
     console.log('ionViewDidLoad HeladosPage');
        
        }

    goToAdd() {
      this.navCtrl.parent.push(AddHeladoPage);
    }


}

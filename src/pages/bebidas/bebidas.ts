import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google: any

@Component({
  selector: 'page-bebidas',
  templateUrl: 'bebidas.html',
})
export class BebidasPage {

  @ViewChild('map') mapRef: ElementRef;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showMap()
  }

  showMap(){
    const location1 = new google.maps.LatLng(2.460769, -76.590633)
    const location2 = new google.maps.LatLng(2.455843, -76.602999)
    const location3 = new google.maps.LatLng(2.458595, -76.598327)
    const location4 = new google.maps.LatLng(2.483852, -76.577548)
    const location5 = new google.maps.LatLng(2.494466, -76.593039)

    const options = {
      center: location1,
      zoom: 14,
      streetViewControl: false,
      mapTypeId: 'roadmap'
    }
    const map = new google.maps.Map(this.mapRef.nativeElement, options)


    this.addMarker(location1, map)
    this.addMarker(location2, map)
    this.addMarker(location3, map)
    this.addMarker(location4, map)
    this.addMarker(location5, map)

  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    })
  }
}

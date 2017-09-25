import { Injectable } from '@angular/core';
import { Helado } from './helado';

@Injectable()
export class HeladosDataProvider {
  data:Helado [];

  constructor () {
    this.loadData();
  }


  loadData() {
    this.data = [
      { nombre: 'Banana Split', porcion: 2, precio: 7000, imagen: 'http://clcdn02.mundotkm.com/2016/02/HELADO5.jpg' },
      { nombre: 'Cono de Chispitas', porcion: 1, precio: 5000, imagen: 'http://www.daledetalles.com/wp-content/uploads/2013/04/cupcakes13.jpg' },
      { nombre: 'Helado de Vainilla', porcion: 1, precio: 5000, imagen: 'http://www.cremhelado.com.co/wp-content/uploads/2015/01/Beneficios_helados3.jpg' },
      { nombre: 'Helado de Avellanas', porcion: 1, precio: 5000, imagen: 'http://www.planetacurioso.com/wp-content/uploads/2013/08/helado_extravagante6.jpg' },
      { nombre: 'Copa de Helado', porcion: 1, precio: 3000, imagen: 'https://i0.fiuxy.com/05332f37db01c670f5dfe640c13920567a85c882?url=http%3A%2F%2Fchefalpaso.com%2Fwp-content%2Fuploads%2F2012%2F05%2FPostre-frutas-helado1.jpg' },
      { nombre: 'Siete Sabores', porcion: 4, precio: 12000, imagen: 'http://turronessirvent.com/wp-content/uploads/2016/01/helados.jpg' },
      { nombre: 'Chocolate Pasion', porcion: 1, precio: 5000, imagen: 'http://static.vix.com/es/sites/default/files/styles/large/public/imj/elgranchef/H/Helado%20de%20chocolate%20sin%20leche.jpg' },
      { nombre: 'Frutos Rojos', porcion: 1, precio: 5000, imagen: 'http://2.bp.blogspot.com/-qZ2Oi3Z3r9M/VNqo_iCRm6I/AAAAAAAAF_A/dcwSL1RgZJI/s1600/P2070250.JPG' },
      { nombre: 'Helado de Fresas', porcion: 1, precio: 5000, imagen: 'https://s-media-cache-ak0.pinimg.com/originals/eb/25/57/eb2557a80bdcf64f1f0d5cd3aa9e22da.jpg' },
      { nombre: 'Paletas', porcion: 1, precio: 3000, imagen: 'http://www.1001consejos.com/wp-content/uploads/2013/03/paletas-de-hielo1.jpg' },
      { nombre: 'Helado de Caramelo', porcion: 1, precio: 5000, imagen: 'http://www.que.es/archivos/201108/helados-dolcelatte.jpg' },
      { nombre: 'Cono de Nieve', porcion: 1, precio: 3000, imagen: 'http://cdn.kiwilimon.com/clasificacion/44/44.jpg' },
      { nombre: 'Helado de Naranja', porcion: 1, precio: 5000, imagen: 'http://recetas.cuidadoinfantil.net/files/2012/06/helado-de-naranja.jpg' },
      { nombre: 'Estrella', porcion: 2, precio: 3000, imagen: 'http://cde.3.elcomercio.pe/ima/0/0/8/0/8/808106/base_image.jpg' },
      { nombre: 'Helado de Lima', porcion: 1, precio: 5000, imagen: 'http://www.salkantay.net/wp-content/uploads/2014/04/helados-en-lima.jpg' },
    ];
  }

}

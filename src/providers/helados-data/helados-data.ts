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
      { nombre: 'Clean & Jerk', rm: 23, imagen: '../../assets/img/cleanJerk.jpg' },
      { nombre: 'Snatch', rm: 195, imagen: '../../assets/img/snatch.jpg' },
      { nombre: 'Deadlift', rm: 405, imagen: '../../assets/img/deadlift.jpg' },
      { nombre: 'Back Squat', rm: 345, imagen: '../../assets/img/backSquat.jpeg' },
      { nombre: 'Fran', rm: 1, imagen: '../../assets/img/fran.jpg' },
      { nombre: 'Isabel', rm: 4, imagen: '../../assets/img/isabel.jpg' },
      { nombre: 'Grace', rm: 1, imagen: '../../assets/img/grace.jpg' },
      { nombre: 'Run 5K', rm: 1, imagen: '../../assets/img/5k.jpg' },
      { nombre: 'Cindy', rm: 1, imagen: '../../assets/img/cindy.jpg' }
    ];
  }

}

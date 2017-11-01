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
      { nombre: 'Clean & Jerk', rm: 23, imagen: 'https://games-assets.crossfit.com/s3fs-public/rotator-lucasparker.jpg' },
      { nombre: 'Snatch', rm: 195, imagen: 'http://www.stackhealthy.com/wp-content/uploads/2015/05/camilleSnatch-1024x682.jpg' },
      { nombre: 'Deadlift', rm: 405, imagen: 'https://i.ytimg.com/vi/SuSS7YD8SAw/maxresdefault.jpg' },
      { nombre: 'Back Squat', rm: 345, imagen: 'https://static1.squarespace.com/static/54915825e4b0646a98a5fb9d/t/5505c37be4b04bf62ae4b5e4/1426441085500/' },
      { nombre: 'Fran', rm: 1, imagen: 'https://i.ytimg.com/vi/GXJn6_nHB1E/maxresdefault.jpg' },
      { nombre: 'Isabel', rm: 4, imagen: 'https://i.ytimg.com/vi/7iUxoTlt5aw/maxresdefault.jpg' },
      { nombre: 'Grace', rm: 1, imagen: 'https://i.ytimg.com/vi/fO6QQaMIDhg/maxresdefault.jpg' },
      { nombre: 'Run 5K', rm: 1, imagen: 'http://running.competitor.com/files/2011/03/IMG_16421.jpg' },
      { nombre: 'Cindy', rm: 1, imagen: 'http://crossfitkells.com/wp-content/uploads/2017/01/cfk-1-6.png' }
    ];
  }

}

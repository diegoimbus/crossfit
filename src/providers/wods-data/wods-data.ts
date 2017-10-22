import { Injectable } from '@angular/core';
import { Wod } from './wod';

Injectable()
export class WodsDataProvider {
    datos: Wod[]

    constructor() {
        this.loadDatos()
    }


    loadDatos(){
        this.datos = [
            { nombre: 'Clean & Jerk', cleanJerk: 245, img: '../../assets/img/cleanJerk.jpg' },
            { nombre: 'Snatch', snatch: 195, img: '../../assets/img/snatch.jpg' },
            { nombre: 'Deadlift', deadlift: 405, img: '../../assets/img/deadlift.jpg' },
            { nombre: 'Back Squat', backSquat: 345, img: '../../assets/img/backSquat.jpeg' },
            { nombre: 'Fran', fran: 1, img: '../../assets/img/fran.jpg' },
            { nombre: 'Isabel', isabel: 4, img: '../../assets/img/isabel.jpg' },
            { nombre: 'Grace', grace: 1, img: '../../assets/img/grace.jpg' },
            { nombre: 'Run 5K', cincoK: 1, img: '../../assets/img/5k.jpg' },
            { nombre: 'Cindy', cindy: 1, img: '../../assets/img/cindy.jpg' }
            
          ];
    }
}
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HeladosPage } from '../pages/helados/helados';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { HeladosDataProvider } from '../providers/helados-data/helados-data';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ModificarWodPage } from '../pages/modificar-wod/modificar-wod';
import { ModPage } from '../pages/mod/mod';
import { ModSnatchPage } from '../pages/mod-snatch/mod-snatch';
import { ModDeadliftPage } from '../pages/mod-deadlift/mod-deadlift';
import { ModBackSquatPage } from '../pages/mod-back-squat/mod-back-squat';
import { ModFranPage } from '../pages/mod-fran/mod-fran';
import { ModIsabelPage } from '../pages/mod-isabel/mod-isabel';
import { ModGracePage } from '../pages/mod-grace/mod-grace';
import { ModCindyPage } from '../pages/mod-cindy/mod-cindy';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { storage } from 'firebase';
import { Facebook } from '@ionic-native/facebook';

export const firebaseConfig = {
  apiKey: "AIzaSyBpsQ1YKo6b41-x5elBq1oqXtxOEiQDMJE",
  authDomain: "c2bionic.firebaseapp.com",
  databaseURL: "https://c2bionic.firebaseio.com",
  projectId: "c2bionic",
  storageBucket: "c2bionic.appspot.com",
  messagingSenderId: "1089393316187"
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HeladosPage,
    BebidasPage,
    LoginPage,
    SignupPage,
    ModificarWodPage,
    ModPage,
    ModSnatchPage,
    ModDeadliftPage,
    ModBackSquatPage,
    ModFranPage,
    ModIsabelPage,
    ModGracePage,
    ModCindyPage
   

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage, 
    HeladosPage,
    BebidasPage,
    SignupPage,
    ModificarWodPage,
    ModPage,
    ModSnatchPage,
    ModDeadliftPage,
    ModBackSquatPage,
    ModFranPage,
    ModCindyPage,
    ModIsabelPage,
    ModGracePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HeladosDataProvider,
    Camera,
    Facebook
    
    
  ]
})
export class AppModule {}

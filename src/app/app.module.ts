import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HeladosPage } from '../pages/helados/helados';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { AddHeladoPage } from '../pages/add-helado/add-helado';
import { HeladosDataProvider } from '../providers/helados-data/helados-data';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
    AddHeladoPage,
    LoginPage,
    SignupPage
   

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
    AddHeladoPage,
    BebidasPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HeladosDataProvider
    
  ]
})
export class AppModule {}

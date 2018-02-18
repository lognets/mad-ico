import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import {TasksPage} from '../pages/tasks/tasks';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SignupPage } from '../pages/signup/signup';

export const  firebaseConfig = {
  apiKey: "AIzaSyAIeYGIUemE5NEMeZM8hVPJ1gJCE0VhtO4",
  authDomain: "mychat-11861.firebaseapp.com",
  databaseURL: "https://mychat-11861.firebaseio.com",
  projectId: "mychat-11861",
  storageBucket: "mychat-11861.appspot.com",
  messagingSenderId: "599892824836"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    AboutPage,
    TabsPage,
    ContactPage,
    TasksPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    AboutPage,
    TabsPage,
    ContactPage,
    TasksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

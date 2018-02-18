import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Component, OnInit, HostBinding } from '@angular/core';
//import { AngularFireDatabaseModule ,} from 'angularfire2/database';
//import {  FirebaseListObservable } from "angularfire2/database-deprecated";
//import { AngularFireDatabase } from "angularfire2/database";
//import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
//import { Router } from '@angular/router';

import {SignupPage} from '../signup/signup';
import {TaskPage} from '../tasks/tasks';
//import { moveIn } from '../router.animations';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  //styleUrls: ['./login.component.css'],
  //animations: [moveIn()],
  //host: {'[@moveIn]': ''}
})

export class HomePage {
  items: Observable<any[]>;
  error: any;
  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth) { }

    signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        console.log(res);
       this.navCtrl .push(  TaskPage      )
      }
      ).catch(
        (err)=>{
          this.error=err;
        });
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
  signInWithGoogle(){
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
            this.navCtrl .push( TaskPage);

      //  console.log(res);
      }
      ).catch(
        (err)=>{
          this.error=err;
        });
  }
  signInWithEmail(){
    this.afAuth.auth
    .signInWithPopup(new firebase.auth.EmailAuthProvider())
    .then(res => {
      this.navCtrl .push(  TaskPage      )
     // console.log(res);
    })
      .catch(
      (err)=>{
        this.error=err;
      });
  }

  signUp(){
    this.navCtrl
    .push(
      SignupPage  
    )
  }
}

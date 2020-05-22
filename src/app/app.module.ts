import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAbAf9CjTy_nI0gzxmVp0dsYi-zAuBsdcI",
  authDomain: "present-easy.firebaseapp.com",
  databaseURL: "https://present-easy.firebaseio.com",
  projectId: "present-easy",
  storageBucket: "present-easy.appspot.com",
  messagingSenderId: "489305524436",
  appId: "1:489305524436:web:a4e8ced30678fe3625d341",
  measurementId: "G-L8J5CNJJXK"
};

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

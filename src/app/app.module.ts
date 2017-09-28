import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyD6KZqbXB913vwQ2_pttvnUAyTg4858PQc",
  authDomain: "fir-crud-dedfc.firebaseapp.com",
  databaseURL: "https://fir-crud-dedfc.firebaseio.com",
  projectId: "fir-crud-dedfc",
  storageBucket: "fir-crud-dedfc.appspot.com",
  messagingSenderId: "394728278652"
};


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule // imports firebase/app needed for everything
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

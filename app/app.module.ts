import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import image upload
// import { ImageUploadModule } from "angular2-image-upload";
// uploads picture
import { UploadService } from './uploads/shared/upload.service';
import { videoUploadService } from './uploads/shared/videoupload.service';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { UploadsListComponent } from './uploads/uploads-list/uploads-list.component';
import { UploadDetailComponent } from './uploads/upload-detail/upload-detail.component';


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
    // ImageUploadModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [AppComponent,
                 UploadFormComponent,
                 UploadsListComponent,
                 UploadDetailComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    UploadService,
    videoUploadService
  ]
})
export class AppModule { }

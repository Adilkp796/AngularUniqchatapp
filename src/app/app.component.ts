import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
// upload sevice from shared folder
import { UploadService } from './uploads/shared/upload.service';
import { videoUploadService } from './uploads/shared/videoupload.service';
import { audioUploadService } from './uploads/shared/audioupload.service';
import { Upload } from './uploads/shared/upload';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  public msgVal: string;
  public image:any;
  public email:any;
  uploads: FirebaseListObservable<Upload[]>;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  ngOnInit() {
    this.uploads = this.upSvc.getUploads({limitToLast: 50})
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, private upSvc: UploadService) {
    this.items = af.list('/uploads', {
      query: {
        limitToLast: 50
      }
    });
    this.user = this.afAuth.authState;
    console.log(afAuth);
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  currentUserDisplayName(): string {
    if (!this.afAuth.auth.currentUser.displayName) { return 'Guest' }
    else { return this.afAuth.auth.currentUser.displayName }
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  Send(desc: string) {
    this.items.push({
       message: desc,
       displayName: this.currentUserDisplayName(),
       profileImage:this.afAuth.auth.currentUser.photoURL,
       timestamp: Date.now(),
       email:this.afAuth.auth.currentUser.email,
      });
    this.msgVal = '';
    this.email=this.afAuth.auth.currentUser.email;
  }
  isYou(email){
     if(email==this.afAuth.auth.currentUser.email)
     return true;
    else
      return false;
  }
  isMe(email){
    if(email==this.afAuth.auth.currentUser.email)
    return false;
   else
     return true;
  }
}

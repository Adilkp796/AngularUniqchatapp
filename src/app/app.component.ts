import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';



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
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/messages', {
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
       name: this.currentUserDisplayName(),
       image:this.afAuth.auth.currentUser.photoURL,
       timestamp: Date.now(),
       email:this.afAuth.auth.currentUser.email
      });
    this.msgVal = '';
    this.email=this.afAuth.auth.currentUser.email;
    // console.log(this.email);
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

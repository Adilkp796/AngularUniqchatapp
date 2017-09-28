import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  public msgVal: string;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
    this.user = this.afAuth.authState;
    console.log(afAuth);
  }
  currentUserDisplayName(): string {
    if (!this.afAuth.auth.currentUser.displayName) { return 'Guest' }
    else { return this.afAuth.auth.currentUser.displayName}
  }
  login() {
   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

logout() {
    this.afAuth.auth.signOut();
}

Send(desc: string) {
    this.items.push({ message: desc,name:this.currentUserDisplayName()});
    this.msgVal = '';
}
//whispering-mountain-33588.herokuapp.com/ | https://git.heroku.com/whispering-mountain-33588.git
}

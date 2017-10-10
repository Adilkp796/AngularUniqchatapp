import { Injectable } from '@angular/core';
import { Upload } from './upload';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';


@Injectable()
export class videoUploadService {

  constructor(private db: AngularFireDatabase ,public afAuth: AngularFireAuth) { }

  private basePath:string = '/uploads';
  uploads: FirebaseListObservable<Upload[]>;


  getUploads(query={}) {
    this.uploads = this.db.list(this.basePath, {
      query: query
    });
    return this.uploads
  }

  // Executes the file uploading to firebase https://firebase.google.com/docs/storage/web/upload-files
  pushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        let snap = snapshot as firebase.storage.UploadTaskSnapshot
        upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.videoUrl = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        upload.email = this.afAuth.auth.currentUser.email
        upload.profileImage = this.afAuth.auth.currentUser.photoURL
        upload.displayName = this.afAuth.auth.currentUser.displayName
        upload.timestamp = Date.now()
        this.saveFileData(upload)
        return undefined
      }
    );
  }



  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }

}

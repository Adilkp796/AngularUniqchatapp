import { Component, OnInit } from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { videoUploadService } from '../shared/videoupload.service';
import {  FirebaseListObservable } from 'angularfire2/database';


import { Upload } from '../shared/upload';
// import * as _ from "lodash";

@Component({
  selector: 'upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls:['upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
  uploads: FirebaseListObservable<Upload[]>;
  selectedFiles: FileList;
  currentUpload: Upload;

  constructor(private upSvc: UploadService,private vdSvc:videoUploadService) { }

  ngOnInit() {

  }

  detectFiles(event) {
      this.selectedFiles = event.target.files;
      console.log(this.selectedFiles["0"].type)

  }

  uploadimage() {
    // image/jpeg
    // image/png
    let fileType = this.selectedFiles["0"].type;
    if(fileType === "image/jpeg" || fileType === "image/png" ){
      let files = this.selectedFiles.item(0)
      this.currentUpload = new Upload(files);
      this.upSvc.pushUpload(this.currentUpload)
    }else{
      console.log("Invalid Type")
    }


  }
  uploadvideo(){
    let fileType = this.selectedFiles["0"].type;
    if(fileType === "video/mp4"){
      let files = this.selectedFiles.item(0)
      this.currentUpload = new Upload(files);
      this.vdSvc.pushUpload(this.currentUpload)
    }else{
      console.log("Invalid Type")
    }
  }



}

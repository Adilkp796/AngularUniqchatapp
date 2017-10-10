import { Component, OnInit } from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { videoUploadService } from '../shared/videoupload.service';
import { audioUploadService } from '../shared/audioupload.service';
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

  constructor(private upSvc: UploadService,private vdSvc:videoUploadService,private adSvc:audioUploadService) { }

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
      alert("please check")
    }


  }
  uploadvideo(){
    let fileType = this.selectedFiles["0"].type;
    if(fileType === "video/mp4"){
      let files = this.selectedFiles.item(0)
      this.currentUpload = new Upload(files);
      this.vdSvc.pushUpload(this.currentUpload)
    }else{
      alert("please check")
    }
  }
  uploadaudio(){
  //  audio/mp3

  let fileType = this.selectedFiles["0"].type;
  if(fileType === "audio/mp3"){
    let files = this.selectedFiles.item(0)
    this.currentUpload = new Upload(files);
    this.adSvc.pushUpload(this.currentUpload)
  }else{
    alert("please check")
  }
  }

}

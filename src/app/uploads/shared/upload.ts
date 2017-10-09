export class Upload {
  timestamp:any;
  profileImage:any;
  displayName:any;
  email:any;
  $key: string;
  file:File;
  name:string;
  url:string;
  progress:number;
  createdAt: Date = new Date();

  constructor(file:File) {
    this.file = file;
  }
}

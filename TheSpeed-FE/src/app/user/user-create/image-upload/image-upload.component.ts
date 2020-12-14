import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { AnonymousSubject } from 'rxjs/internal/Subject';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  // selectedFile: File = null;
  // imageURL: string;
  // picture: any;
  // uploader: CloudinaryUploader = new CloudinaryUploader(
  //   new CloudinaryOptions({ cloudName: 'nolawolfe', uploadPreset: '4:5' })
  // );
  // loading: any;

  constructor(http: HttpClient) { }

  ngOnInit() {
  }

  // upload() {
  //   this.loading = true;
  //   this.uploader.uploadAll();
  //   this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
  //     const res: any = JSON.parse(response);
  //     console.log(res);
  //     this.imageURL = res.url;
  //     console.log(this.imageURL);
  //     this.picture = this.imageURL;
  //   };
  //   this.uploader.onErrorItem = function (fileItem, response, status, headers) {
  //     console.error('onErrorItem', fileItem, response, status, headers);
  //   };
  //   console.log('picture upload successful');
  // }
}

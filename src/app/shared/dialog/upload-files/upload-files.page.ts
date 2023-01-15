import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {UploadFilesService} from "../../services/http/upload/upload-files.service";

export interface DocFiles {
  id: number;
  path: string;
  name: string;
  format: string;
}

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.page.html',
  styleUrls: ['./upload-files.page.scss'],
})
export class UploadFilesPage implements OnInit {
  fileList: String[] = [];
  selectedFilesList: File [] | undefined = [];
  selectedFiles: FileList | undefined;
  currentFile: File | undefined;
  progress = 0;
  message = '';
  fileInfos: Observable<any> | undefined;

  constructor(private uploadService: UploadFilesService) {
  }


  selectFileMultiple(event: any) {
    this.selectedFiles = event.target.files;
    // @ts-ignore
    for (let i = 0; i < this.selectedFiles?.length; i++) {
      // @ts-ignore
      this.fileList.push(this.selectedFiles?.item(i).name);
      // @ts-ignore
      this.selectedFilesList?.push(this.selectedFiles?.item(i))
      console.log(this.selectedFiles?.item(i))
    }
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  ngOnInit() {
    //this.fileInfos = this.uploadService.getFiles();
  }

  uploadFiles() {
    this.uploadService.uploadFiles(this.selectedFilesList).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          // @ts-ignore
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
         // this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
  }

  upload() {
    this.progress = 0;

    // @ts-ignore
    this.currentFile = this.selectedFiles.item(0);

    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          // @ts-ignore
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }

}

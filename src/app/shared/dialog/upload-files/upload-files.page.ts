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
export class UploadFilesPage{
  fileList: String[] = [];
  selectedFilesList: File [] | undefined = [];
  selectedFiles: FileList | undefined;
  currentFile: File | undefined;
  progress = 0;
  message = '';
  fileInfos: Observable<any> | undefined;

  constructor(private uploadService: UploadFilesService) {
  }


  selectFiles(event: any) {
    this.selectedFiles = event.target.files;
    // @ts-ignore
    for (let i = 0; i < this.selectedFiles?.length; i++) {
      // @ts-ignore
      this.fileList.push(this.selectedFiles?.item(i).name);
      // @ts-ignore
      this.selectedFilesList?.push(this.selectedFiles?.item(i))
    }
  }

  upload() {
    this.uploadService.upload(this.selectedFilesList).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          // @ts-ignore
          this.progress = Math.round(100 * event.loaded / event.total);
        }else if (event.type === HttpEventType.Response) {
          this.progress=0;
          this.message = event.body;
        }
      });
  }


}

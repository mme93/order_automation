import {Component} from '@angular/core';
import {HttpEventType} from '@angular/common/http';
import {UploadFilesService} from '../../services/http/upload/upload-files.service';
import {MatTableDataSource} from '@angular/material/table';

export interface DocFiles {
  position: number;
  name: string;
  size: number;
  type: string;
  status: string;
}

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.page.html',
  styleUrls: ['./upload-files.page.scss'],
})
export class UploadFilesPage {
  docFiles: DocFiles[] = [];
  selectedFilesList: File [] = [];
  selectedFiles: FileList | undefined;
  progress = 0;
  message = '';
  isUploading = false;
  buttonText = 'Upload';
  displayedColumns: string[] = ['position', 'name', 'size', 'type', 'status', 'delete'];
  dataSource = new MatTableDataSource<DocFiles>(this.docFiles);

  constructor(private uploadService: UploadFilesService) {
  }


  selectFiles(event: any) {
    this.selectedFiles = event.target.files;
    // @ts-ignore
    for (let i = 0; i < this.selectedFiles?.length; i++) {
      // @ts-ignore
      if (!this.checkDuplicateFileName(this.selectedFiles?.item(i).name)) {
        // @ts-ignore
        this.selectedFilesList?.push(this.selectedFiles?.item(i))
        this.docFiles.push(<DocFiles>{
          position: i,
          // @ts-ignore
          name: this.selectedFiles?.item(i).name,
          // @ts-ignore
          size: Number((this.selectedFiles?.item(i).size / 1000 / 1000).toFixed(2)),
          // @ts-ignore
          type: this.selectedFiles?.item(i).type.split('/')[1],
          status: 'Not uploaded'
        });
      }
    }
    this.dataSource = new MatTableDataSource<DocFiles>(this.docFiles);
  }

  checkDuplicateFileName(fileName: string) {
    let duplicate = false;
    this.docFiles.forEach(file => {
      if (file.name === fileName) {
        duplicate = true;
      }
    });
    return duplicate;
  }

  changeStatus(status: string) {
    this.docFiles.forEach(file => file.status = status);
    this.dataSource = new MatTableDataSource<DocFiles>(this.docFiles);
  }

  upload() {
    this.isUploading = true;
    this.uploadService.upload(this.selectedFilesList).subscribe(
      event => {
        this.changeStatus('Is loading')
        if (event.type === HttpEventType.UploadProgress) {
          // @ts-ignore
          this.progress = Math.round(100 * event.loaded / event.total);
          this.buttonText = 'Upload ' + this.progress + ' %';
          if (this.progress === 100) {
            this.buttonText = 'Save Files on Server'
            this.changeStatus('Is saving')
          }
        } else if (event.type === HttpEventType.Response) {
          this.progress = 0;
          this.message = event.body;
          this.isUploading = false;
          this.buttonText = 'Upload';
          this.changeStatus('Successful upload')
        }
      });
  }

  remove(position: number) {
    this.docFiles.splice(position, 1);
    this.docFiles.forEach((files, index) => {
      files.position = index;
    })
    this.selectedFilesList.splice(position, 1)
    this.dataSource = new MatTableDataSource<DocFiles>(this.docFiles);
  }
}

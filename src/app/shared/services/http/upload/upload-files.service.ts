import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  constructor(private http: HttpClient) { }

  uploadFiles(file: File[] | undefined): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    file?.forEach(file =>{
      formData.append('file', file);
    })
    const req = new HttpRequest('POST', 'http://localhost:8997/document/a', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  upload(file: File | undefined): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    // @ts-ignore
    formData.append('file', file);

    const req = new HttpRequest('POST', 'http://localhost:8997/document/upload', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('http://localhost:8997/document/files');
  }
}

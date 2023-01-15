import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  private baseUrl = 'http://localhost:8997';

  constructor(private http: HttpClient) { }

  upload(file: File | undefined): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    // @ts-ignore
    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/document/test`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}

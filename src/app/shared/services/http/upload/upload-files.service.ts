import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  constructor(private http: HttpClient) {
  }

  upload(file: File[] | undefined): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    file?.forEach(file => {
      formData.append('file', file);
    })
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', 'http://localhost:8997/document/upload');
    const req = new HttpRequest('POST', '/document/upload', formData, {
      headers: headers,
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }


}

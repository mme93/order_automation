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
    const req = new HttpRequest('POST', 'http://services-meier.de:8997/document/upload', formData, {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

}

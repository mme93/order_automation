import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  constructor(private http: HttpClient) {
  }

  sendSMS(password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      })
    };
    return this.http.get<string>(environment.backendUrl + 'SMS/send/'+password, httpOptions);
  }
}

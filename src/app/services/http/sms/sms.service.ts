import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

interface SMS{
  phone: string;
  msg: string;
}

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
   return this.http.post<SMS>('http://localhost:8998/SMS/test',JSON.stringify(password), httpOptions);

  }
  test(sms: SMS) {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      })
    };

    return this.http.post<SMS>('http://mameie.ddns.net:5000/SMS',JSON.stringify(sms), httpOptions);

  }
}

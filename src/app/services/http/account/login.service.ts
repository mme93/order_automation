import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {Login} from '../../../model/login/Login';

const httpOptions = {
  headers: new HttpHeaders({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<Login> {
    const jwtRequest={username,password};
    return this.http.post<Login>( environment.backendUrl+'authenticate', JSON.stringify(jwtRequest), httpOptions);
  }

}

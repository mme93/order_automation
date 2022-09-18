import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {JwtResponse} from '../../../model/jwtResponse';

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

  login(username: string, password: string): Observable<JwtResponse> {
    const jwtRequest={username,password};
    return this.http.post<JwtResponse>( environment.backendUrl+'authenticate', JSON.stringify(jwtRequest), httpOptions);
  }

}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {JwtResponse} from '../../../model/login/jwtResponse';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) {
  }

  isTokenExpired() {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      })
    };
    this.http.post<JwtResponse>('http://localhost:8998/isTokenExpired',
      JSON.stringify({jwtToken: localStorage.getItem('token')}
      ), httpOptions).subscribe(
      response => {
        localStorage.setItem('token', response.jwtToken);
        console.log(response.jwtToken);
      },
      error => {
        console.log(error);
      }
    );
    return true;
  }
}

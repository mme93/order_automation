import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient, private router: Router) {
  }

  async isTokenExpired() {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      })
    };

    try {
      const response = await this.http.post(environment.backendUrl + 'isTokenExpired',
        JSON.stringify({jwtToken: localStorage.getItem('token')}),
        httpOptions
      ).toPromise();
      localStorage.setItem('token', Object(response).jwtToken);
    } catch (error) {
      // @ts-ignore
      if (error.status === 403) {
        await this.router.navigate(['/account/login']);
      }
    }
  }

}

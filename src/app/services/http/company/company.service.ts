import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Company} from '../../../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompany(){
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer '+localStorage.getItem('token'),
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Company: localStorage.getItem('company')
      })
    };
    return this.http.get<Company>(environment.backendUrl+'company/', httpOptions);
  }

}

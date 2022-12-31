import {Injectable} from '@angular/core';
import {Customer} from '../../../model/firm/customer';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  updateCustomer(customer: Customer) {
    //
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Company: localStorage.getItem(`company`)|| '{}'
      })
    };
    return this.http.put(environment.backendUrl + 'customer/update', JSON.stringify(customer), httpOptions);
  }

  loadAllCustomer(): Observable<Customer[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/consistent-type-assertions
        Company: <string>localStorage.getItem('company')
      })
    };
    return this.http.get<Customer[]>(environment.backendUrl + 'customer/all', httpOptions);
  }

  createCustomer(customer: Customer) {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/consistent-type-assertions
        Company: <string>localStorage.getItem('company')
      })
    };
    return this.http.post<Customer[]>(environment.backendUrl + 'customer/create', JSON.stringify(customer), httpOptions).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

  deleteCustomer(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        //TODO: Need Company to knwo?

        // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/consistent-type-assertions
        Company: <string>localStorage.getItem('company')
      })
    };
    return this.http.delete<Customer[]>(environment.backendUrl + 'customer/delete/' + id, httpOptions);
  }


  findCustomerByID(customerID: any): Observable<Customer> {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/consistent-type-assertions
        Company: <string>localStorage.getItem('company')
      })
    };
    return this.http.get<Customer>(environment.backendUrl + 'customer/' + customerID, httpOptions);
  }
}

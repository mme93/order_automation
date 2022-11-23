import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Order} from '../../../model/order/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  createOrder(order: Order) {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    };
    return this.http.post<string>(environment.backendUrl + 'order/create', JSON.stringify(order), httpOptions);
  }

  getOrders() {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      })
    };
    return this.http.get<Order[]>(environment.backendUrl + 'order/all', httpOptions);
  }

  getExternalOrder(orderId: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(environment.backendUrl + 'external/order/exist', JSON.stringify({
      orderId,
      password
    }), httpOptions);
  }

  getOrder(orderId: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<Order>(environment.backendUrl + 'external/order/' + orderId + '/' + password, httpOptions);
  }

  updateOrderStatus(order: Order) {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    };
    return this.http.put(environment.backendUrl + 'order/updateStatus', JSON.stringify(order), httpOptions).subscribe();
  }
}

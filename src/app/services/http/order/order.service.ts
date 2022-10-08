import {Injectable} from '@angular/core';
import {OrderSettings} from '../../../model/order/orderSettings';
import {Todo} from '../../../model/order/todo';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Order} from '../../../model/order/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private defaultOrderSettings: OrderSettings = {
    firstNameVisibility: true,
    lastNameVisibility: true,
    emailVisibility: true,
    orderNumberVisibility: true,
    orderStatusVisibility: true,
    orderInfoVisibility: true,
    toDoVisibility: true,
    toDoStatusVisibility: true,
    toDoInfoVisibility: true
  };

  constructor(private http: HttpClient) {
  }

  createOrder(order: Order) {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Company: localStorage.getItem('company')
      })
    };
    return this.http.post(environment.backendUrl + 'order/create', JSON.stringify(order), httpOptions);
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
    return this.http.post(environment.backendUrl +'external/order/exist', JSON.stringify({
      orderId,
      password
    }), httpOptions);
  }

  getTodos(): Todo[] {
    const todos: Todo[] = [{name: 'Changes tires'}, {name: 'Change headlights'}, {name: 'Make TÜV'}, {name: 'Create bill'}];
    return todos;
  }

  getOrderSettings(): OrderSettings {
    return this.defaultOrderSettings;
  }

  saveOrderSettings(orderSettings: OrderSettings) {
    console.log(orderSettings);
  }

  getOrder(orderId: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<Order>(environment.backendUrl +'external/order/' + orderId+'/'+password, httpOptions);
  }
}

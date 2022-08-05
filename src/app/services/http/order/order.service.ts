import { Injectable } from '@angular/core';
import {OrderSettings} from '../../../model/orderSettings';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  defaultOrderSettings: OrderSettings ={
    orderCustomerVisibility: true,
    firstNameVisibility: true,
    lastNameVisibility: true,
    emailVisibility: true,
    orderNumberVisibility: true,
    orderStatusVisibility: true,
    orderInfoVisibility: true,
    toDoVisibility: true,
    toDoStatusVisibility: true,

  };

  constructor() { }

  getOrderSettings(): OrderSettings{
    return this.defaultOrderSettings;
  }
}

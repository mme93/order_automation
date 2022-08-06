import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../model/customer';
import {OrderSettings} from '../../../model/orderSettings';
import {Todo} from '../../../model/todo';
import {CustomerService} from '../../../services/http/customer/customer.service';
import {OrderService} from '../../../services/http/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

  customer: Customer;
  orderSettings: OrderSettings;
  todos: Todo[] = [];

  constructor(
    private customerService: CustomerService,
    private orderService: OrderService
  ) {
  }

  ngOnInit() {
    this.orderSettings = this.orderService.getOrderSettings();
    this.todos = this.orderService.getTodos();
  }

}

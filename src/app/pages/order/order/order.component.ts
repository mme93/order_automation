import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/firm/customer';
import {OrderSettings} from '../../../model/order/orderSettings';
import {Todo} from '../../../model/order/todo';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

  customer: Customer;
  orderSettings: OrderSettings;
  todos: Todo[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}

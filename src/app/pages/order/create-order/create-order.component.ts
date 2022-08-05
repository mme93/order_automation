import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../../services/http/customer/customer.service';
import {Customer} from '../../../model/customer';
import {OrderSettings} from '../../../model/orderSettings';
import {OrderService} from '../../../services/http/order/order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit {

  customer: Customer;
  orderSettings: OrderSettings;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private orderService: OrderService
  ) {
  }

  ngOnInit() {

  }

}

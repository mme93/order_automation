import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../services/http/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  orderId: string;
  password: string;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  login() {
    this.orderService.getExternalOrder(this.orderId,this.password);
  }
}

import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../services/http/order/order.service';
import {Order} from '../../../model/order/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe(responses => {
        this.orders = responses;
      }, error => console.log(error));
  }

}


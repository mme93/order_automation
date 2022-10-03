import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../services/http/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    //this.orderService.getOrders();
  }

}


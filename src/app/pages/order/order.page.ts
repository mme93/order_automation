import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../shared/services/http/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  orderSize = 0;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getOrders().subscribe(response => this.orderSize = response.length);
  }

}

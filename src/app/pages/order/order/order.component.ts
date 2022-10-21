import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/firm/customer';
import {Todo} from '../../../model/order/todo';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../../services/http/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  sourceURL;
  order;
  customer: Customer;
  todos: Todo[] = [];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.sourceURL = params.sourceURL;
      this.orderService.getOrders().subscribe(orders => {
        orders.forEach(order => {
          if (order.id.toString() === params.orderId) {
            this.order = order;
          }
        });
      });
    });
  }
  back(){
    this.router.navigate([this.sourceURL]);
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../../services/http/order/order.service';
import {Order} from '../../../../model/order/order';
import {OrderTodo} from '../../../../model/order/todo';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  orderTodos: OrderTodo[] = [];
  order: Order = {
    id: -1,
    customerID: '',
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    street: '',
    postalCode: '',
    callNumber: '',
    information: '',
    company: '',
    orderInformation: '',
    refNr: '',
    createDate: null,
    startDate: null,
    endDate: null,
    furtherInformation: null,
    todos: this.orderTodos,
    userId: '',
    status: '',
    password: ''
  };

  constructor(private route: ActivatedRoute, private orderService: OrderService) {
  }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe((params) => {
        this.orderService.getOrder(params.get('orderId'), params.get('password')).subscribe(
          response => {
            this.order = response;
          },
          error => {
            console.log(error);
          }
        );
      });
  }
}

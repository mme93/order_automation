import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderTodo} from '../../../../shared/model/order/todo';
import {Order} from '../../../../shared/model/order/order';
import {OrderService} from '../../../../shared/services/http/order/order.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  orderStatus = 0;
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
            this.orderStatus=Number(response.status);
          },
          error => {
            console.log(error);
          }
        );
      });
  }
}

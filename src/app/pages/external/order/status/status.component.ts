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
    // @ts-ignore
    createDate: null,
    // @ts-ignore
    startDate: null,
    // @ts-ignore
    endDate: null,
    // @ts-ignore
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
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        this.orderService.getOrder(<string>params.get('orderId'), <string>params.get('password')).subscribe(
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

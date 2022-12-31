import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../../shared/model/order/order';
import {Customer} from '../../../shared/model/firm/customer';
import {OrderService} from '../../../shared/services/http/order/order.service';
import {OrderTodo} from '../../../shared/model/order/todo';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

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
    furtherInformation: '',
    todos: [],
    userId: '',
    status: '',
    password: ''
  };
  sourceURL: any;
  customer: Customer | undefined;
  isDisabled = true;
  orderStatus: boolean [] = [false, false, false, false];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.orderStatus = [false, false, false, false];
    this.route.queryParams.subscribe(params => {
      this.sourceURL = params['sourceURL'];
      this.orderService.getOrders().subscribe(orders => {
        orders.forEach(order => {
          if (order.id.toString() === params['orderId']) {
            this.order = order;
            // @ts-ignore
            this.orderStatus[this.order.status] = true;
          }
        });
      });
    });
  }

  editOrder() {
    this.isDisabled = !this.isDisabled;
  }

  sortedTodosByStatus() {
    const sortedTodo: OrderTodo[] = [];
    this.order.todos.forEach(todos => {
      if (todos.status === 0) {
        sortedTodo.push(todos);
      }
    });
    this.order.todos.forEach(todos => {
      if (todos.status === 1) {
        sortedTodo.push(todos);
      }
    });
    this.order.todos.forEach(todos => {
      if (todos.status === 2) {
        sortedTodo.push(todos);
      }
    });
    this.order.todos = sortedTodo;
  }

  back() {
    this.router.navigate([this.sourceURL]);
  }

  delete() {
    this.orderService.deleteOrder(this.order);
    this.router.navigate([this.sourceURL]);
  }

  startOrder() {
    this.order.status = '1';
    this.orderStatus[0] = false;
    this.orderStatus[1] = true;
    this.orderService.updateOrderStatus(this.order);
  }

  finishOrder() {
    this.order.status = '2';
    this.orderStatus[1] = false;
    this.orderStatus[2] = true;
    this.orderService.updateOrderStatus(this.order);
    this.router.navigate([this.sourceURL]);
  }

  save() {
    this.orderService.updateOrder(this.order);
    this.isDisabled = true;
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../../model/firm/customer';
import {Todo} from '../../../model/order/todo';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../../services/http/order/order.service';
import {Order} from '../../../model/order/order';


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
    createDate: null,
    startDate: null,
    endDate: null,
    furtherInformation: '',
    todos: [],
    userId: '',
    status: '',
    password: ''
  };
  sourceURL;
  customer: Customer;
  todos: Todo[] = [];
  isDisabled=true;


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

  editOrder(){
    this.isDisabled=!this.isDisabled;
  }

  back() {
    this.router.navigate([this.sourceURL]);
  }

  delete() {
    //Todo: Delete MEthod
    this.router.navigate([this.sourceURL]);
  }

  startOrder() {

  }

  finishOrder() {

  }
}

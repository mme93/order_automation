import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../services/http/order/order.service';
import {Order} from '../../../model/order/order';

export interface OrderElement {
  position: number;
  refNr: string;
  editorId: string;
  callnumber: string;
  firstName: string;
  lastName: string;
  status: string;
}


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: OrderElement[] = [];
  displayedColumns: string[] = ['position', 'refNr', 'editorId', 'callnumber', 'firstName', 'lastName', 'status'];
  dataSource: OrderElement[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe(responses => {
        let counter = 1;
        responses.forEach(order => {
          this.orders.push({
            position: counter,
            refNr: order.refNr,
            editorId: order.userId,
            callnumber: order.callNumber,
            firstName: order.firstName,
            lastName: order.lastName,
            status: order.status
          });
          counter++;
        });
        this.dataSource=this.orders;
      }, error => console.log(error));
  }

}


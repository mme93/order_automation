import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OrderService} from '../../../services/http/order/order.service';
import {Order} from '../../../model/order/order';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

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
export class OrdersComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  resultOrder: Order[] = [];
  orders: OrderElement[] = [];
  displayedColumns: string[] = ['position', 'refNr', 'editorId', 'callnumber', 'firstName', 'lastName', 'status', 'open'];
  dataSource = new MatTableDataSource<OrderElement>([]);

  constructor(private orderService: OrderService) {
  }

  ngAfterViewInit() {
    this.orderService.getOrders()
      .subscribe(responses => {
        this.resultOrder = responses;
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
        this.dataSource = new MatTableDataSource<OrderElement>(this.orders);
        this.dataSource.paginator = this.paginator;
      }, error => console.log(error));
  }

  showOrder(test: any) {
    console.log(this.resultOrder[test].id);
  }
}


import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {OrderService} from '../../../services/http/order/order.service';
import {Order} from '../../../model/order/order';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {OrderElement, OrderFilterService} from '../../../services/tools/order-filter.service';
import {Router} from '@angular/router';


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

  constructor(private orderService: OrderService, private orderFilterService: OrderFilterService, private router: Router) {
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

  showOrder(index: any) {
    this.router.navigate(
      ['/order/order'],
      {
        queryParams: {sourceURL: '/order/orders', orderId: this.resultOrder[index-1].id}
      });
  }

  handleChange(event) {
    const query: string = event.target.value.toLowerCase();
    this.dataSource = new MatTableDataSource<OrderElement>(
      this.orderFilterService.filterOrder(
        query, new MatTableDataSource<OrderElement>(this.orders)
      ));
    this.dataSource.paginator = this.paginator;
  }
}


import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {OrderElement, OrderFilterService} from '../../../shared/services/tools/order-filter.service';
import {Order} from '../../../shared/model/order/order';
import {OrderService} from '../../../shared/services/http/order/order.service';


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
            status: this.getStatusTextFromNumber(order.status)
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
  getStatusTextFromNumber(status: string): string{
    if(status.toString() === '0'){
      return 'Created';
    }else if(status.toString() === '1'){
      return 'Processing';
    }else if(status.toString() === '2'){
      return 'Finished';
    }else if(status.toString() === '3'){
      return 'Paused';
    }
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


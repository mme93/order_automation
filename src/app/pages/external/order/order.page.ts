import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OrderService} from '../../../shared/services/http/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  orderId: string | undefined;
  password: string| undefined;
  isLoading = false;

  constructor(private orderService: OrderService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.isLoading = true;
    if (this.orderId != null && this.password != null) {
      this.orderService.getExternalOrder(this.orderId, this.password).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/external/order/status'],
            {
              queryParams: {orderId: this.orderId, password: this.password}
            }
          );
        },
        error => {
          console.log('error: ' + error.status);
          this.isLoading = false;
        }
      );
    }
  }
}

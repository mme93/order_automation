import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../services/http/order/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  orderId: string;
  password: string;
  isLoading = false;

  constructor(private orderService: OrderService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.isLoading = true;
    this.orderService.getExternalOrder(this.orderId, this.password).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/external/order/status']);
      },
      error => {
        console.log('error: ' + error.status);
        this.isLoading = false;
      }
    );
  }
}

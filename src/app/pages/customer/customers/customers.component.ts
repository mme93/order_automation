import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../services/http/customer/customer.service';
import {Customer} from '../../../model/customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit() {
    this.customerService.loadAllCustomer().subscribe(response =>{
      this.customers=response;
    },
    error => console.log(error)
    );
  }

  edit(id: number) {
    this.router.navigate(['/customer/profile'], { queryParams: { customerID: id.toString() } });
  }

  showOrders(id: number) {

  }

  createOrders(id: number) {
    this.router.navigate(['/order/create']);
  }

  createCustomer() {
    this.router.navigate(['/customer/create']);
  }
}

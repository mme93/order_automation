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
        this.customers.push(response[0]);
        this.customers.push(response[0]);
        this.customers.push(response[0]);
        this.customers.push(response[0]);
        this.customers.push(response[0]);
        this.customers.push(response[0]);
        this.customers.push(response[0]);
    },
    error => console.log(error)
    );
  }

  createCustomer() {
    this.router.navigate(['/customer/create']);
  }
}

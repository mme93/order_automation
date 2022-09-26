import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../model/customer';
import {CustomerService} from '../../../services/http/customer/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer={
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    street: '',
    postcode: '',
    callNumber: '',
    information: '',
    company: '',
  };
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.customer.company=localStorage.getItem('company');
  }

  save() {
  this.customerService.createCustomer(this.customer);
  this.router.navigate(['/customer/customers']);
  }
}

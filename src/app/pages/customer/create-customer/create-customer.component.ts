import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../model/customer';

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
  constructor() { }

  ngOnInit() {}

  save() {
  console.log(this.customer);
  }
}

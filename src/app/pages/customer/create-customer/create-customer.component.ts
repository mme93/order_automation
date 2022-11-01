import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/firm/customer';
import {CustomerService} from '../../../services/http/customer/customer.service';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {validateEmail, validateStreet} from '../../../shared.tools/Validators';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    street: '',
    postalCode: '',
    callNumber: '',
    information: '',
    company: '',
  };
  customerGroup = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z\\s]*$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[A-Za-z\\s]*$')]],
    email: ['', [Validators.required, validateEmail()]],
    city: ['', [Validators.required, Validators.pattern('^[A-Za-z\\s]*$')]],
    street: ['', [Validators.required, validateStreet()]],
    postalCode: ['', [
      Validators.required,
      Validators.pattern('^[0-9]{5}')
    ]],
    callNumber: ['', [
      Validators.required,
      Validators.pattern('[0-9]{6,15}')
    ]],
    information: ['', [
      Validators.required,
      Validators.minLength(0),
      Validators.maxLength(500)
    ]]
  });

  constructor(
    private customerService: CustomerService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.customer.company = localStorage.getItem('company');
  }

  save() {
    this.customerService.createCustomer(this.customer);
    this.router.navigate(['/customer/customers']);
  }

  back() {
    this.router.navigate(['/customer/customers']);
  }

  refresh() {
    this.customer = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      street: '',
      postalCode: '',
      callNumber: '',
      information: '',
      company: localStorage.getItem('company'),
    };
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../../model/customer';
import {CustomerService} from '../../../services/http/customer/customer.service';

@Component({
  selector: 'app-profile-customer',
  templateUrl: './profile-customer.component.html',
  styleUrls: ['./profile-customer.component.scss'],
})
export class ProfileCustomerComponent implements OnInit {
  title = 'Edit Customer ';
  customerID: string;
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

  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.customerService.findCustomerByID(params.customerID).subscribe(customer => {
        this.customer = customer;
        console.log(customer)
      });
    });
  }

  saveCustomer() {
    console.log('test');
    this.customerService.updateCustomer(this.customer).subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
    //    this.router.navigate(['/customer/customers']);
  }

}

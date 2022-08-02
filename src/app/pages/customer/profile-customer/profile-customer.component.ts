import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Customer} from '../../../model/customer';
import {CustomerService} from '../../../services/http/customer/customer.service';

@Component({
  selector: 'app-profile-customer',
  templateUrl: './profile-customer.component.html',
  styleUrls: ['./profile-customer.component.scss'],
})
export class ProfileCustomerComponent implements OnInit {
  customer: Customer;

  constructor(private route: ActivatedRoute, private customerService: CustomerService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const customerID = params.customerID;
      const resultCustomer = this.customerService.findCustomerByID(Number(customerID));
      if (resultCustomer != null) {
        this.customer = resultCustomer;
      }
    });
  }

}

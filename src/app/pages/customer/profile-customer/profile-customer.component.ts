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
  title = '';
  customer: Customer;

  constructor(private route: ActivatedRoute,private router: Router, private customerService: CustomerService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const customerID = params.customerID;
      if (customerID === '-1') {
        this.customer = {
          firstName: '',
          lastName: '',
          email: '',
          street: '',
          town: '',
          postcode: null,
          callNumber: '',
          info: '',
          id: customerID
        };
        this.title='Create new Customer';
      } else {
        const resultCustomer = this.customerService.findCustomerByID(Number(customerID));
        if (resultCustomer != null) {
          this.customer = resultCustomer;
          this.title='Update profile '+this.customer.lastName;
        }else{
          alert('Customer not found!');
          this.router.navigate(['customer/customers']);
        }
      }
    });
  }
  saveCustomer(){
    this.customerService.saveCustomer(this.customer);
  }

}

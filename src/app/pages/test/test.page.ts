import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../services/http/customer/customer.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  existingCustomer: Customer = null;
  newCustomer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    town: '',
    postcode: null,
    callNumber: '',
    info: '',
    id: null
  };
  selectedCustomer = '';
  customers: Customer[] = [];
  settingsChoiceArray = ['Default', 'Custom'];
  settingsChoice = 'Default';

  customerChoiceArray = ['Existing Customer', 'New Customer', 'Only Telephone number'];
  customerChoice = 'New Customer';
  isExistingCustomerVisible = true;
  isNewCustomerVisible = true;
  onlyTelephoneNumber = '';
  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customers = this.customerService.loadAllCustomer();
  }


  changeExistingCustomer() {
    const customerId = this.selectedCustomer.split(':')[0].split(' ')[1];
    this.existingCustomer = this.customers.filter(customer => customer.id.toString() === customerId)[0];
  }

  test() {
    console.log(this.newCustomer);
  }
}

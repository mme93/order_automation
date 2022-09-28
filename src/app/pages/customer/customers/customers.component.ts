import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../services/http/customer/customer.service';
import {Customer} from '../../../model/customer';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService, private router: Router,private alertController: AlertController) {
  }

  ngOnInit() {
    this.customerService.loadAllCustomer().subscribe(response =>{
      this.customers=response;
    },
    error => console.log(error)
    );
  }

  createCustomer() {
    this.router.navigate(['/customer/create']);
  }

  showProfile(customer: Customer){
    this.router.navigate(['/customer/profile'],{queryParams:{customerID: customer.id}});
  }

  delete(customer: Customer) {
    this.customerService.deleteCustomer(customer.id).subscribe(
      response => this.customers=this.customers.filter((value, index) =>value.id!==customer.id)
    );
  }
}

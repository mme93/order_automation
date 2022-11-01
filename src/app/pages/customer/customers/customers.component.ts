import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from '../../../services/http/customer/customer.service';
import {Customer} from '../../../model/firm/customer';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

interface CustomerTable{
  position: number;
  firstName: string;
  lastName: string;
  callnumber: string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['position','firstName', 'lastName', 'callnumber','open'];
  dataSource = new MatTableDataSource<CustomerTable>([]);
  customers: Customer[] = [];
  customerTable: CustomerTable []=[];
  constructor(private customerService: CustomerService, private router: Router,private alertController: AlertController) {
  }

  ngOnInit() {
    this.customerService.loadAllCustomer().subscribe(response =>{
      let pos=1;
        response.forEach(customer =>{
          this.customers.push(customer);
          this.customerTable.push({
            position: pos,
            firstName: customer.firstName,
            lastName: customer.lastName,
            callnumber: customer.callNumber,
          });
          pos++;
        });
        this.dataSource = new MatTableDataSource<CustomerTable>(this.customerTable);
        this.dataSource.paginator = this.paginator;
    },
    error => console.log(error)
    );
  }

  createCustomer() {
    this.router.navigate(['/customer/create']);
  }

  showProfile(index: number){
    this.router.navigate(['/customer/profile'],{queryParams:{customerID: this.customers[index].id}});
  }

  delete(customer: Customer) {
    this.customerService.deleteCustomer(customer.id).subscribe(
      response => this.customers=this.customers.filter((value, index) =>value.id!==customer.id)
    );
  }

  handleChange($event: any) {

  }
}

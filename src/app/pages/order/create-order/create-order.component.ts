import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Customer} from '../../../shared/model/firm/customer';
import {OrderTodo} from '../../../shared/model/order/todo';
import {CustomerService} from '../../../shared/services/http/customer/customer.service';
import {OrderService} from '../../../shared/services/http/order/order.service';
import {Order} from '../../../shared/model/order/order';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit {
  isLoading = false;
  existingCustomer: Customer = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    postalCode: '',
    callNumber: '',
    company: '',
    information: ''
  };
  newCustomer: Customer = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    postalCode: '',
    callNumber: '',
    company: '',
    information: ''
  };
  selectedCustomer = '';
  customers: Customer[] = [];
  settingsChoiceArray = ['Default', 'Custom'];
  settingsChoice = 'Default';

  customerChoiceArray = ['Existing Customer', 'New Customer', 'Only Telephone number'];
  customerChoice = 'Existing Customer';
  isExistingCustomerVisible = true;
  isNewCustomerVisible = true;
  onlyTelephoneNumber = '';

  orderTodoTitle = '';
  orderTodo = '';
  orderIsStatus = true;
  isEditOrder: boolean[] = [];
  orderTodos: OrderTodo[] = [];
  orderInformation = '';
  refNr = '';
  furtherInformation = '';
  createDate: Date = new Date();
  startDate: Date = new Date();
  endDate: Date = new Date();
  customerIsSave = false;

  constructor(
    private customerService: CustomerService,
    private orderService: OrderService,
    private router: Router
  ) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    this.newCustomer.company = <string>localStorage.getItem('company');
  }

  ngOnInit() {
    this.customerService.loadAllCustomer().subscribe(value => this.customers = value);
  }


  changeExistingCustomer() {
    const customerId = this.selectedCustomer.split(':')[0].split(' ')[1];
    this.existingCustomer = this.customers.filter(customer => customer.id.toString() === customerId)[0];
  }

  addTodo() {
    if (this.orderIsStatus) {
      this.orderTodos.push({
        information: this.orderTodoTitle,
        todo: this.orderTodo,
        status: 0
      });
    } else {
      this.orderTodos.push({
        information: this.orderTodoTitle,
        todo: this.orderTodo,
        status: -1
      });
    }
    this.isEditOrder.push(true);
    this.orderTodo = '';
    this.orderTodoTitle = '';
  }

  deleteTodo(index: number) {
    this.orderTodos.splice(index, 1);
    this.isEditOrder.splice(index, 1);
  }

  changeStatus(indexOfelement: number) {
    if (this.orderTodos[indexOfelement].status === -1) {
      this.orderTodos[indexOfelement].status = 1;

    } else if (this.orderTodos[indexOfelement].status === 1) {
      this.orderTodos[indexOfelement].status = -1;
    }
  }

  saveCustomer() {
    this.customerService.createCustomer(this.newCustomer);
    this.customerIsSave = true;
  }

  //TODO: Fehlermeldung im Backend beheben und Route aus dem Error entfernen
  saveOrder() {
    this.isLoading = true;
    //Existing Customer
    if (this.customerChoice === this.customerChoiceArray[0]) {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      this.orderService.createOrder(<Order>{
        id: -1,
        customerID: this.existingCustomer.id,
        firstName: this.existingCustomer.firstName,
        lastName: this.existingCustomer.lastName,
        email: this.existingCustomer.email,
        city: this.existingCustomer.city,
        street: this.existingCustomer.street,
        postalCode: this.existingCustomer.postalCode,
        callNumber: this.existingCustomer.callNumber,
        information: this.existingCustomer.information,
        company: localStorage.getItem('company'),

        orderInformation: this.orderInformation,
        refNr: this.refNr,
        createDate: this.createDate,
        startDate: this.startDate,
        endDate: this.endDate,
        furtherInformation: this.furtherInformation,
        todos: this.orderTodos,
        userId: localStorage.getItem('userId'),
        status: '0',
        password: ''
      })
        .subscribe((response) => {
          console.log(response);
          this.router.navigate(['/order/orders']);
          this.isLoading = false;
        }, error => {
          this.isLoading = false;
          console.log(error);
          this.router.navigate(['/order/orders']);
        });

    } // New Customer
    else if (this.customerChoice === this.customerChoiceArray[1]) {
      this.orderService.createOrder({
        id: -1,
        customerID: '-1',
        firstName: this.newCustomer.firstName,
        lastName: this.newCustomer.lastName,
        email: this.newCustomer.email,
        city: this.newCustomer.city,
        street: this.newCustomer.street,
        postalCode: this.newCustomer.postalCode,
        callNumber: this.newCustomer.callNumber,
        information: this.newCustomer.information,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        company: <string>localStorage.getItem('company'),

        orderInformation: this.orderInformation,
        refNr: this.refNr,
        createDate: this.createDate,
        startDate: this.startDate,
        endDate: this.endDate,
        furtherInformation: this.furtherInformation,
        todos: this.orderTodos,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        userId: <string>localStorage.getItem('userId'),
        status: '0',
        password: ''
      })
        .subscribe((response) => {
          console.log(response);
          this.router.navigate(['/order/orders']);
          this.isLoading = false;
        }, error => {
          this.isLoading = false;
          console.log(error);
          this.router.navigate(['/order/orders']);
        });

    } //Only Telephonenumber
    else if (this.customerChoice === this.customerChoiceArray[2]) {
      this.orderService.createOrder({
        id: -1,
        customerID: '-1',
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        street: '',
        postalCode: '',
        callNumber: this.onlyTelephoneNumber,
        information: '',
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        company: <string>localStorage.getItem('company'),

        orderInformation: this.orderInformation,
        refNr: this.refNr,
        createDate: this.createDate,
        startDate: this.startDate,
        endDate: this.endDate,
        furtherInformation: this.furtherInformation,
        todos: this.orderTodos,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        userId: <string>localStorage.getItem('userId'),
        status: '0',
        password: ''
      })
        .subscribe((response) => {
          console.log('SMS would send!');
          console.log(response);
          this.router.navigate(['/order/orders']);
          this.isLoading = false;
        }, error => {
          this.isLoading = false;
          console.log(error);
          this.router.navigate(['/order/orders']);
        });
    }

  }
}

import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../services/http/customer/customer.service';
import {Customer} from '../../../model/firm/customer';
import {OrderTodo} from '../../../model/order/todo';
import {OrderService} from '../../../services/http/order/order.service';
import {Router} from '@angular/router';
import {SmsService} from '../../../services/http/sms/sms.service';


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
    postalCode: null,
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

  orderTodoInformation = '';
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

  constructor(
    private customerService: CustomerService,
    private orderService: OrderService,
    private router: Router,
    private smsService: SmsService
  ) {
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
        information: this.orderTodoInformation,
        todo: this.orderTodo,
        status: 1
      });
    } else {
      this.orderTodos.push({
        information: this.orderTodoInformation,
        todo: this.orderTodo,
        status: -1
      });
    }
    this.isEditOrder.push(true);
    this.orderTodo = '';
    this.orderTodoInformation = '';
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

  saveOrder() {
    this.isLoading = true;

    this.orderService.createOrder({
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
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        console.log(error);
      });

  }
}

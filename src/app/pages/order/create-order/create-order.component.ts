import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../services/http/customer/customer.service';
import {Customer} from '../../../model/customer';
import {OrderTodo} from '../../../model/todo';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit {

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
  customerChoice = 'New Customer';
  isExistingCustomerVisible = true;
  isNewCustomerVisible = true;
  onlyTelephoneNumber = '';

  orderTodoInformation = '';
  orderTodo = '';
  orderIsStatus = true;
  orderTodos: OrderTodo[] = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.loadAllCustomer().subscribe(value => this.customers = value);
  }


  changeExistingCustomer() {
    const customerId = this.selectedCustomer.split(':')[0].split(' ')[1];
    this.existingCustomer = this.customers.filter(customer => customer.id.toString() === customerId)[0];
  }

  addTodo() {
    if(this.orderIsStatus){
      this.orderTodos.push({
        information: this.orderTodoInformation,
        todo: this.orderTodo,
        status: 1
      });
    }else{
      this.orderTodos.push({
        information: this.orderTodoInformation,
        todo: this.orderTodo,
        status: -1
      });
    }
    this.orderTodo = '';
    this.orderTodoInformation = '';
  }

  deleteTodo(index: number) {
    this.orderTodos.splice(index,1);
  }
}

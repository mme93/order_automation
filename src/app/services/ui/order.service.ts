import { Injectable } from '@angular/core';
import {CreateOrderUI, OrderUI} from '../../model/ui/createOrderUI';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
    t(){

    }
  getCreateOderUI(): CreateOrderUI{
    return {
      newCustomer: {
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
      },
      existingCustomer: {
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
      },
      selectedCustomer:'',
      customers:[],
      settingsChoice: 'Default',
      settingsChoiceArray: ['Default', 'Custom'],
      customerChoiceArray: ['Existing Customer', 'New Customer', 'Only Telephone number'],
      customerChoice: 'Existing Customer',
      isExistingCustomerVisible: true,
      isNewCustomerVisible: true,
      onlyTelephoneNumber:'',
      orderTodoInformation:'',
      orderTodo: '',
      orderIsStatus: true,
      orderTodos: []
    };
  }

}

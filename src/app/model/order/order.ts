import {Customer} from '../firm/customer';
import {OrderTodo} from './todo';

export interface Order {
  id: number;
  customerID: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  street: string;
  postalCode: string;
  callNumber: string;
  information: string;
  company: string;

  orderInformation: string;
  refNr: string;
  createDate: Date;
  startDate: Date;
  endDate: Date;
  furtherInformation: string;
  todos: OrderTodo[];
  userId: string;
  status: string;
}

export interface OrderSettings {
  orderCustomer: Customer;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  orderNumber: string;
  orderIdentifyKey: string;
  orderInfo: string;
  orderStatus: number;
  todos: ToDo[];
}

/*
  Status: 0=not in process, 1=in process && 2= finished
 */
export interface ToDo {
  todo: string;
  toDoInfo: string;
  todoStatus: number;
  isVisibilty: boolean;
}

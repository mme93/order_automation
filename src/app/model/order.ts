import {Customer} from './customer';


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
  orderInfoVisibility: boolean;
  toDoVisibility: boolean;
  todos: ToDo[];
  todoResult: ToDo[];
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

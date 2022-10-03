import {Customer} from '../firm/customer';
import {OrderTodo} from '../order/todo';

export interface CreateOrderUI {
  newCustomer: Customer;
  existingCustomer: Customer;
  selectedCustomer: string;
  customers: Customer[];
  settingsChoice: string;
  settingsChoiceArray: string[];
  customerChoiceArray: string[];
  customerChoice: string;
  isExistingCustomerVisible: boolean;
  isNewCustomerVisible: boolean;
  onlyTelephoneNumber: string;
  orderTodoInformation: string;
  orderTodo: string;
  orderIsStatus: boolean;
  orderTodos: OrderTodo[];
}
export class OrderUI{
  newCustomer: Customer;
  existingCustomer: Customer;
  selectedCustomer: string;
  customers: Customer[];
  settingsChoice: string;
  settingsChoiceArray: string[];
  customerChoiceArray: string[];
  customerChoice: string;
  isExistingCustomerVisible: boolean;
  isNewCustomerVisible: boolean;
  onlyTelephoneNumber: string;
  orderTodoInformation: string;
  orderTodo: string;
  orderIsStatus: boolean;
  orderTodos: OrderTodo[];
}

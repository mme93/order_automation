import {Injectable} from '@angular/core';
import {Customer} from '../../../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[]=[
    {
      firstName: 'Friedrich',
      lastName: 'Müller',
      email: 'mueller@gmail.de',
      street: 'Hingbergstraße 117',
      town: 'Mülheim an der Ruhr',
      postcode: 45473,
      callNumber: '0208/49932',
      info: 'Ich bin der Herr Müller und arbeite bei Autocenter VW',
      id: 1
    },
    {
      firstName: 'Hans',
      lastName: 'Peter',
      email: 'peter@web.de',
      street: 'Gracht 15',
      town: 'Mülheim an der Ruhr',
      postcode: 45473,
      callNumber: '0208/773884',
      info: 'Ich arbeite in einer privaten Werkstatt',
      id: 2
    }
  ];

  constructor() {
  }
  findCustomerByID(id: number): Customer{
    let resultCustomer;
    this.customers.forEach(customer => {
      if(customer.id === id ){
        resultCustomer = customer;
      }
    });
    return resultCustomer;
  }
  loadAllCustomer(): Customer[] {
    return this.customers;
  }

}

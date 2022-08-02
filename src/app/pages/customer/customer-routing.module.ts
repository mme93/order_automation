import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CustomerPage} from './customer.page';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CustomersComponent} from './customers/customers.component';
import {ProfileCustomerComponent} from './profile-customer/profile-customer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CustomerPage
  },
  {
    path: 'create',
    component: CreateCustomerComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'profile',
    component: ProfileCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerPageRoutingModule {
}

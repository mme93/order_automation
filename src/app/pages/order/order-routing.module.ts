import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderPage } from './order.page';
import {CreateOrderComponent} from './create-order/create-order.component';
import {OrderComponent} from './order/order.component';
import {OrdersComponent} from './orders/orders.component';


const routes: Routes = [
  {
    path: '',
    component: OrderPage
  },
  {
    path: 'create',
    component: CreateOrderComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPageRoutingModule {}

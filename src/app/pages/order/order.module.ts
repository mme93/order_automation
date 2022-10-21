import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPageRoutingModule } from './order-routing.module';

import { OrderPage } from './order.page';
import {OrderComponent} from './order/order.component';
import {OrdersComponent} from './orders/orders.component';
import {CreateOrderComponent} from './create-order/create-order.component';
import {OrderSettingsComponent} from '../settings/order-settings/order-settings.component';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPageRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule
  ],
  declarations: [OrderPage,OrderComponent,OrdersComponent,CreateOrderComponent,OrderSettingsComponent]
})
export class OrderPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateOrderDialogPageRoutingModule } from './create-order-dialog-routing.module';

import { CreateOrderDialogPage } from './create-order-dialog.page';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateOrderDialogPageRoutingModule,
    MatTableModule,
    MatIconModule
  ],
  declarations: [CreateOrderDialogPage]
})
export class CreateOrderDialogPageModule {}

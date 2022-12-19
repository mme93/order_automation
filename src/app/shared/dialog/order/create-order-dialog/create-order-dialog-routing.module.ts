import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateOrderDialogPage } from './create-order-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: CreateOrderDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateOrderDialogPageRoutingModule {}

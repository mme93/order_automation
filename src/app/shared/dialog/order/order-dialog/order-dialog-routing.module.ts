import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDialogPage } from './order-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: OrderDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDialogPageRoutingModule {}

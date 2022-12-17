import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoAlertPage } from './info-alert.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAlertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoAlertPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotorbikePage } from './motorbike.page';

const routes: Routes = [
  {
    path: '',
    component: MotorbikePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotorbikePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarPage } from './car.page';
import {CreateCarComponent} from './create-car/create-car.component';
import {OverviewCarsComponent} from './overview-cars/overview-cars.component';
import {CarProfileComponent} from './car-profile/car-profile.component';

const routes: Routes = [
  {
    path: '',
    component: CarPage
  },
  {
    path: 'create-car',
    component: CreateCarComponent
  },
  {
    path: 'car-profile',
    component: CarProfileComponent
  },
  {
    path: 'overview-cars',
    component: OverviewCarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarPageRoutingModule {}

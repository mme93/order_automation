import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarPageRoutingModule } from './car-routing.module';

import { CarPage } from './car.page';
import {CreateCarComponent} from './create-car/create-car.component';
import {CarProfileComponent} from './car-profile/car-profile.component';
import {OverviewCarsComponent} from './overview-cars/overview-cars.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarPageRoutingModule,
    MatDividerModule,
  ],
  declarations: [CarPage, CreateCarComponent,CarProfileComponent,OverviewCarsComponent]
})
export class CarPageModule {}

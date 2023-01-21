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
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarPageRoutingModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  declarations: [CarPage, CreateCarComponent,CarProfileComponent,OverviewCarsComponent]
})
export class CarPageModule {}

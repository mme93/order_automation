import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiclePageRoutingModule } from './vehicle-routing.module';

import { VehiclePage } from './vehicle.page';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiclePageRoutingModule,
    MatIconModule
  ],
  declarations: [VehiclePage]
})
export class VehiclePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotorbikePageRoutingModule } from './motorbike-routing.module';

import { MotorbikePage } from './motorbike.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotorbikePageRoutingModule
  ],
  declarations: [MotorbikePage]
})
export class MotorbikePageModule {}

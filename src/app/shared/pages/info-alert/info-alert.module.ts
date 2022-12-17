import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoAlertPageRoutingModule } from './info-alert-routing.module';

import { InfoAlertPage } from './info-alert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoAlertPageRoutingModule
  ],
  declarations: [InfoAlertPage]
})
export class InfoAlertPageModule {}

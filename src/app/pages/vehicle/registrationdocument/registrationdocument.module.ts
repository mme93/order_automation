import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationdocumentPageRoutingModule } from './registrationdocument-routing.module';

import { RegistrationdocumentPage } from './registrationdocument.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationdocumentPageRoutingModule
  ],
  declarations: [RegistrationdocumentPage]
})
export class RegistrationdocumentPageModule {}

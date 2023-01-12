import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationdocumentPageRoutingModule } from './registrationdocument-routing.module';

import { RegistrationdocumentPage } from './registrationdocument.page';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationdocumentPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  declarations: [RegistrationdocumentPage]
})
export class RegistrationdocumentPageModule {}

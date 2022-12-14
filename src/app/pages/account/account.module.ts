import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';
import {LoginComponent} from './login/login.component';
import {PasswordResetComponent} from './password-reset/password-reset.component';
import {ProfileComponent} from './profile/profile.component';
import {RegistrationComponent} from './registration/registration.component';
import {CompanyComponent} from './company/company.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AccountPageRoutingModule
  ],
  declarations: [AccountPage,LoginComponent,PasswordResetComponent,ProfileComponent,RegistrationComponent,CompanyComponent]
})
export class AccountPageModule {}

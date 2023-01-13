import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadFilesPageRoutingModule } from './upload-files-routing.module';

import { UploadFilesPage } from './upload-files.page';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadFilesPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  declarations: [UploadFilesPage]
})
export class UploadFilesPageModule {}

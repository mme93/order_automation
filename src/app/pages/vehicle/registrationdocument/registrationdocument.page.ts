import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {UploadFilesPage} from "../../../shared/dialog/upload-files/upload-files.page";

@Component({
  selector: 'app-registrationdocument',
  templateUrl: './registrationdocument.page.html',
  styleUrls: ['./registrationdocument.page.scss'],
})
export class RegistrationdocumentPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async onEventSelected() {
    const modal = await this.modalController.create({
      component: UploadFilesPage
    });
    await modal.present();
  }
}

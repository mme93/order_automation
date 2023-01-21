import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {UploadFilesPage} from "../../../../shared/dialog/upload-files/upload-files.page";
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss'],
})
export class CreateCarComponent implements OnInit {
  imageUrl: string | undefined;
  selectedVehicleDocFiles: File | undefined;
  validVehicleDocFile = false;
  vehicleDocumentsGroup = this.formBuilder.group({
    fin: ['', [Validators.required, Validators.minLength(1)]],
    vehiclePlate: ['', [Validators.required, Validators.minLength(1)]],
    power: ['', [Validators.required, Validators.minLength(1)]],
    driveType: ['', [Validators.required, Validators.minLength(1)]],
  });

  constructor(
    private modalController: ModalController,
    public formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {

  }

  async uploadFiles() {
    const modal = await this.modalController.create({
      component: UploadFilesPage
    });
    await modal.present();
    const {data} = await modal.onDidDismiss();
    console.log(data);
  }

  analyseFile() {

  }

  selectVehicleDocFiles($event: Event) {
    // @ts-ignore
    this.selectedVehicleDocFiles = event.target.files[0];
    if (this.selectedVehicleDocFiles?.type.split('/')[0] !== 'image') {
      alert('No valid Image Type')
    } else {
      this.validVehicleDocFile = true;
      this.imageUrl = URL.createObjectURL(this.selectedVehicleDocFiles);
    }
  }

  removeFile() {
    this.validVehicleDocFile = false;
    this.imageUrl = '';
    this.selectedVehicleDocFiles = undefined;
  }
}

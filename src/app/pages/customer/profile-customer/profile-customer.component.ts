import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../../shared/services/http/customer/customer.service';
import {Customer} from '../../../shared/model/firm/customer';
import {FormBuilder, Validators} from '@angular/forms';
import {validateEmail, validateStreet} from '../../../shared/tools/Validators';
import {ModalController} from '@ionic/angular';
import {OrderDialogPage} from '../../../shared/dialog/order/order-dialog/order-dialog.page';
import {CreateOrderDialogPage} from '../../../shared/dialog/order/create-order-dialog/create-order-dialog.page';


@Component({
  selector: 'app-profile-customer',
  templateUrl: './profile-customer.component.html',
  styleUrls: ['./profile-customer.component.scss'],
})
export class ProfileCustomerComponent implements OnInit {

  customerGroup = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z\\s]*$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[A-Za-z\\s]*$')]],
    email: ['', [Validators.required, validateEmail()]],
    city: ['', [Validators.required, Validators.pattern('^[A-Za-z\\s]*$')]],
    street: ['', [Validators.required, validateStreet()]],
    postalCode: ['', [
      Validators.required,
      Validators.pattern('^[0-9]{5}')
    ]],
    callNumber: ['', [
      Validators.required,
      Validators.pattern('[0-9]{6,15}')
    ]],
    information: ['', [
      Validators.required,
      Validators.minLength(0),
      Validators.maxLength(500)
    ]]
  });

  alert = document.createElement('ion-alert');
  isEditing = true;

  customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.customerService.findCustomerByID(params.customerID).subscribe(customer => {
        this.customer = customer;
        this.customerGroup.controls.firstName.setValue(customer.firstName);
        this.customerGroup.controls.lastName.setValue(customer.lastName);
        this.customerGroup.controls.email.setValue(customer.email);
        this.customerGroup.controls.city.setValue(customer.city);
        this.customerGroup.controls.street.setValue(customer.street);
        this.customerGroup.controls.postalCode.setValue(customer.postalCode);
        this.customerGroup.controls.callNumber.setValue(customer.callNumber);
        this.customerGroup.controls.information.setValue(customer.information);
      });
    });
  }

  save() {
    this.customer.firstName = this.customerGroup.controls.firstName.value;
    this.customer.lastName = this.customerGroup.controls.lastName.value;
    this.customer.email = this.customerGroup.controls.email.value;
    this.customer.city = this.customerGroup.controls.city.value;
    this.customer.street = this.customerGroup.controls.street.value;
    this.customer.postalCode = this.customerGroup.controls.postalCode.value;
    this.customer.callNumber = this.customerGroup.controls.callNumber.value;
    this.customer.information = this.customerGroup.controls.information.value;

    this.customerService.updateCustomer(this.customer).subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
    //    this.router.navigate(['/customer/customers']);
  }

  back() {
    this.router.navigate(['/customer/customers']);
  }

  editOrder() {
    this.isEditing = !this.isEditing;
  }

  async delete() {
    this.alert.header = 'Delete Customer';
    this.alert.message = 'Are you sure you want to delete the customer?';
    this.alert.buttons = [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'OK',
        role: 'confirm'
      }
    ];

    document.body.appendChild(this.alert);
    await this.alert.present();
    const result = await this.alert.onDidDismiss();
    if (result.role === 'cancel') {
      console.log('No delete');
    } else if (result.role === 'confirm') {
      this.customerService.deleteCustomer(this.customer.id);
      this.router.navigate(['/customer/customers']);
    }
  }

  async cancel() {
    this.alert.header = 'Cancle update Customer';
    this.alert.message = 'Are you sure you want to cancel without saving?';
    this.alert.buttons = [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'OK',
        role: 'confirm'
      }
    ];

    document.body.appendChild(this.alert);
    await this.alert.present();
    const result = await this.alert.onDidDismiss();
    if (result.role === 'cancel') {
      console.log('No delete');
    } else if (result.role === 'confirm') {
      console.log('delete');
    }
    this.isEditing = !this.isEditing;
  }

  async openCustomerOrderDialog() {
    const modal = await this.modalController.create({
      component: OrderDialogPage
    });
    await modal.present();
  }

  async openAddCustomerOrderDialog() {
    const modal = await this.modalController.create({
      component: CreateOrderDialogPage,
      componentProps: {value: JSON.stringify(this.customer)}
    });
    await modal.present();
  }
}

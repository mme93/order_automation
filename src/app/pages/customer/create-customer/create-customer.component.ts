import {Component} from '@angular/core';
import {CustomerService} from '../../../services/http/customer/customer.service';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {validateEmail, validateStreet} from '../../../shared.tools/Validators';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent {

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

  constructor(
    private customerService: CustomerService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
  }

  save() {
    this.customerService.createCustomer(
      {
        id: '-1',
        firstName: this.customerGroup.controls.firstName.value,
        lastName: this.customerGroup.controls.lastName.value,
        email: this.customerGroup.controls.email.value,
        city: this.customerGroup.controls.city.value,
        street: this.customerGroup.controls.street.value,
        postalCode: this.customerGroup.controls.postalCode.value,
        callNumber: this.customerGroup.controls.callNumber.value,
        information: this.customerGroup.controls.information.value,
        company: localStorage.getItem('company'),
      }
    );
    this.refresh();
    this.router.navigate(['/customer/customers']);
  }

  back() {
    this.router.navigate(['/customer/customers']);
  }

  refresh() {
    this.customerGroup.controls.firstName.setValue('');
    this.customerGroup.controls.lastName.setValue('');
    this.customerGroup.controls.email.setValue('');
    this.customerGroup.controls.city.setValue('');
    this.customerGroup.controls.street.setValue('');
    this.customerGroup.controls.postalCode.setValue('');
    this.customerGroup.controls.callNumber.setValue('');
    this.customerGroup.controls.information.setValue('');
  }
}

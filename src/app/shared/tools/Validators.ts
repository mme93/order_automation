import {AbstractControl, ValidatorFn} from '@angular/forms';


// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function validateStreet(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } => {
    if (control.value.toString() === null || control.value.toString().length === 0) {
      console.log(control.value.toString());
      return false ? {required: true} : null;
    }
    const streetSplit: string[] = control.value.toString().split(' ');
    const splitLenght = streetSplit.length - 1;
    //TODO: Check Number with Character example 1B
    const isNumber = !isNaN(Number(streetSplit[splitLenght]))
      && streetSplit[splitLenght].length === 0;
    return (streetSplit[splitLenght].length === 0) ? {required: true} : null;
    /*
    console.log(streetSplit);
    console.log(!isNaN(Number(streetSplit[splitLenght])));
    return !((!control.value.toString().includes(' ')) && control.value.toString().includes('@')) ? {validateDate: true} : null;
     */
  };
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function validateEmail(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } => !(
    (!control.value.toString().includes(' ')) && control.value.toString().includes('@')) ? {validateDate: true} : null;
}



import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

const CONFIG = {
  errorMessages: {
    email: 'Enter a valid email.',
    required: 'This field is required.',
    min: 'value too small',
    max: 'value too large',
    minLength: 'value too short',
    maxLength: 'value too big',
    notMatch: 'Password do not match'
  }
};


export class FormValidationService {

  getErrorMsg(formControl: AbstractControl): string {
    const errors = formControl.errors;
    let error = '';

    if (errors) {
      Object
        .keys(errors)
        .some(errorKey => {
          if (errors[errorKey]) {
            error = CONFIG.errorMessages[errorKey] || 'Invalid value';

            return true;
          }
        });
    }

    return error;
  }

  showErrorOnField(formControl: AbstractControl) {
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }

  validateAllFormFields(formGroup?: FormGroup): void {
    Object
      .keys(formGroup.controls)
      .forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          if (typeof control.value === 'string') {
            control.setValue(control.value.trim());
          }
          control.markAsDirty({onlySelf: true});
        } else if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        } else if (control instanceof FormArray) {
          control.controls.forEach(ctrl => {
            if (ctrl instanceof FormControl) {
              if (typeof ctrl.value === 'string') {
                ctrl.setValue(ctrl.value.trim());
              }
              ctrl.markAsDirty({onlySelf: true});
            } else if (ctrl instanceof FormGroup) {
              this.validateAllFormFields(ctrl);
            }
          });
        }
      });
  }
}

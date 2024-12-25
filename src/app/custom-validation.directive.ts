import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CustomValidationDirective, multi: true }]
})
export class CustomValidationDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    // Add custom validation logic here
    return null;
  }
}

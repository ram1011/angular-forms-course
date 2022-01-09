import { Directive } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";
import { CreatePasswordStrength } from "./../validators/passwordstrength";

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[PasswordStrength]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthDirective,
      multi: true,
    },
  ],
})
export class PasswordStrengthDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return CreatePasswordStrength()(control);
  }
}

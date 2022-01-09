import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function CreatePasswordStrength(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasUppercase = /[A-Z]+/.test(value);
    const haslowercase = /[a-z]+/.test(value);
    const hasNumerics = /[0-9]+/.test(value);
    const passwordvalid = hasNumerics && hasUppercase && haslowercase;
    return !passwordvalid ? { InvalidPassword: true } : null;
  };
}

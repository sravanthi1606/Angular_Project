import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';



export function PasswordValidatorComponent(password: string, confirmPassword: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const formGroup = control as FormGroup;
    const pass = formGroup.get(password)?.value;
    const confirmPass = formGroup.get(confirmPassword)?.value;
    if (pass !== confirmPass) {
      return { 'passwordMismatch': true };
    }
    return null;
  };
}

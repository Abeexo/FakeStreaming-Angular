import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordUtils {
  public static PasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumeric = /[0-9]+/.test(value);
      const hasNoSpaces = /^\S+$/.test(value); // Aggiunto regex per escludere gli spazi
      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasNoSpaces;
      return !passwordValid ? { passwordStrength: true } : null;
    };
  }
}

export default PasswordUtils;

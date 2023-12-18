import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog-component/alert-dialog-component.component';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    console.log('campi validi');
    if (this.registrationForm.valid) {

      const userData = this.registrationForm.value;
      localStorage.setItem('user', JSON.stringify(userData));

      console.log('Registration successful!', userData);

      this.dialog.open(AlertDialogComponent, {
        data: {
          title: 'Success',
          message: 'Registration successful!'
        }
      });
      this.goToLogin();
    } else {
      this.dialog.open(AlertDialogComponent, {
        data: {
          title: 'Error',
          message: 'Please fill in all the required fields correctly.'
        }
      });
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}

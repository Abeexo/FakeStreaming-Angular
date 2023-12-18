import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog-component/alert-dialog-component.component';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.valid) {
      const enteredEmail = this.loginForm.value.email;
      const enteredPassword = this.loginForm.value.password;

      const storedUserString = localStorage.getItem('user');
      if (storedUserString) {
        console.log(storedUserString);
        const storedUser = JSON.parse(storedUserString);
        const storedEmail = storedUser.email;
        const storedPassword = storedUser.password;

        if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
          localStorage.setItem('loggedInUserName', storedUser.firstName);
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Success',
              message: 'Login successful!'
            }
          });
          this.authService.setIsLogged(true); // Imposta isUserLogged su true
          this.router.navigate(['/home']);
        } else if (enteredEmail !== storedEmail || enteredPassword !== storedPassword) {
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Error',
              message: 'Email or password is incorrect'
            }
          });
        } else {
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Error',
              message: 'User not registered'
            }
          });
        }
      } else {
        this.dialog.open(AlertDialogComponent, {
          data: {
            title: 'Error',
            message: 'User not registered'
          }
        });
      }
    }
  }

}

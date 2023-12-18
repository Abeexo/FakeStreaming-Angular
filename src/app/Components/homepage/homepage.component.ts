import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  loggedInUserName: string;

  constructor(private authService: AuthService, private router: Router) {
    this.loggedInUserName = localStorage.getItem('loggedInUserName') || '';
  }

  logout() {
    localStorage.removeItem('loggedInUserName');
    this.authService.setIsLogged(false);

    this.router.navigate(['/registration']);
  }

}

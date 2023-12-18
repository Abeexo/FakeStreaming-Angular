import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  loggedInUserName: string;

  constructor() {
    // Leggi il nome utente dal localStorage
    this.loggedInUserName = localStorage.getItem('loggedInUserName') || '';
  }

  ngOnInit(): void {
    // Leggi il nome utente dal localStorage
    this.loggedInUserName = localStorage.getItem('loggedInUserName') || '';
  }
}



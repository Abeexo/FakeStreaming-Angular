import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_LOGGED_KEY = 'userLogged';
  private isUserLogged = false;

  constructor() {
    const userLogged = localStorage.getItem(this.USER_LOGGED_KEY);
    this.isUserLogged = userLogged ? JSON.parse(userLogged) : false;
  }

  private saveUserLoggedState(): void {
    localStorage.setItem(this.USER_LOGGED_KEY, String(this.isUserLogged));
  }


  setIsLogged(value: boolean): void {
    this.isUserLogged = value;
    this.saveUserLoggedState();
  }

  isLogged(): boolean {
    return this.isUserLogged;
  }
}

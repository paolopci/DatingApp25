import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs';

export interface User {
  displayName: string;
  email: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  baseUrl = 'https://localhost:5001/api/';
  currentUser = signal<User | null>(null);

  constructor() {
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        const user: User = JSON.parse(userString);
        this.currentUser.set(user);
      } catch (error) {
        console.error('Error parsing user from localStorage', error);
        localStorage.removeItem('user');
      }
    }
  }

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
        }
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}

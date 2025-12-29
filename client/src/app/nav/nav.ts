import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../core/account.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, TitleCasePipe],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  accountService = inject(AccountService);
  model: any = {};
  isMobileMenuOpen = false;
  isDarkTheme = false;

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    const initialTheme =
      savedTheme ?? document.documentElement.getAttribute('data-theme') ?? 'light';
    this.isDarkTheme = initialTheme === 'dark';
    document.documentElement.setAttribute('data-theme', initialTheme);
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => console.log(error)
    });
  }

  logout() {
    this.accountService.logout();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}

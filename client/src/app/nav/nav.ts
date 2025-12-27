import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  isMobileMenuOpen = false;
  isDarkTheme = false;

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    const initialTheme =
      savedTheme ??
      document.documentElement.getAttribute('data-theme') ??
      'light';
    this.isDarkTheme = initialTheme === 'dark';
    document.documentElement.setAttribute('data-theme', initialTheme);
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

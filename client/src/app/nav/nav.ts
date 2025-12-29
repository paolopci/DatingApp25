import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  model: any = {};
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

  login() {
    console.log(this.model);
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

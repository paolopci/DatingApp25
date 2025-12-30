import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../core/account.service';
import { TitleCasePipe } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, TitleCasePipe, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  accountService = inject(AccountService);
  private router = inject(Router);
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
        this.router.navigateByUrl('/members');
      },
      error: error => console.log(error)
    });
  }

  logout() {
    this.accountService.logout();
    this.model = {};
  }

  toggleMobileMenu() {
    this.setMobileMenuState(!this.isMobileMenuOpen);
  }

  closeMobileMenu() {
    this.setMobileMenuState(false);
  }

  private setMobileMenuState(isOpen: boolean) {
    this.isMobileMenuOpen = isOpen;
    document.body.classList.toggle('mobile-menu-open', isOpen);
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}


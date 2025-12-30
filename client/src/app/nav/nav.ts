import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../core/services/account.service';
import { TitleCasePipe } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastService } from '../core/services/toast.service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, TitleCasePipe, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  accountService = inject(AccountService);
  private router = inject(Router);
  private toastService = inject(ToastService);
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
        this.toastService.success('Login effettuato con successo');
        this.router.navigateByUrl('/members');
      },
      error: error => {
        this.toastService.error('Username o password non validi');
        console.log(error);
      }
    });
  }

  logout() {
    this.accountService.logout();
    this.toastService.info('Logout effettuato');
    this.model = {};
    this.router.navigateByUrl('/');
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


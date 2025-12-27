import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  toggleTheme(event: any) {
    const theme = event.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }
}

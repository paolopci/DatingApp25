import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountService } from './core/account.service';
import { Nav } from './nav/nav';
import { Home } from './features/home/home';

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  public accountService = inject(AccountService);

  protected readonly title = 'Dating App';
}

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server-error',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './server-error.html',
  styleUrl: './server-error.css',
})
export class ServerError {
  error: any;
  showDetails = false;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.['error'];
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}

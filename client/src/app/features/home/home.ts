import { Component, inject } from '@angular/core';
import { Register } from '../register/register';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-home',
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private toastService = inject(ToastService);
  registerMode = false;

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  testSuccess() {
    this.toastService.success('Operazione completata con successo!');
  }

  testError() {
    this.toastService.error('Si è verificato un errore imprevisto.');
  }
}


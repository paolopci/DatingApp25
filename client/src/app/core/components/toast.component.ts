import { Component, inject } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast toast-end toast-bottom z-50">
      @for (toast of toastService.toasts(); track toast.id) {
        <div 
          class="alert cursor-pointer transition-all duration-300" 
          [ngClass]="{
            'alert-success': toast.type === 'success',
            'alert-error': toast.type === 'error',
            'alert-info': toast.type === 'info',
            'alert-warning': toast.type === 'warning'
          }"
          (click)="toastService.remove(toast.id)"
        >
          <span>{{ toast.message }}</span>
        </div>
      }
    </div>
  `
})
export class ToastComponent {
  toastService = inject(ToastService);
}

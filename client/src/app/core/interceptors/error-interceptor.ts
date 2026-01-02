import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toastService = inject(ToastService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error) {
        switch (error.status) {
          case 400:
            if (error.error.errors) {
              // Validation errors: let the component handle them
              // We intentionally do not show a toast here
            } else {
              // Bad Request without specific validation errors
              // Check for ProblemDetails title, or error string, or fallback to status text
              const message = error.error.title || error.error || error.statusText;
              toastService.error(typeof message === 'string' ? message : JSON.stringify(message));
            }
            break;
          
          case 401:
            toastService.error('Unauthorized');
            break;
          
          case 404:
            router.navigateByUrl('/not-found');
            break;
          
          case 500:
            toastService.error('Server Error');
            const navigationExtras: NavigationExtras = {state: {error: error.error}};
            router.navigateByUrl('/server-error', navigationExtras);
            break;
            
          default:
            toastService.error('Something unexpected went wrong');
            break;
        }
      }
      return throwError(() => error);
    })
  );
};
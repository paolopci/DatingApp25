import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { errorInterceptor } from './error-interceptor';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { vi } from 'vitest';

describe('errorInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  
  const toastServiceSpy = {
    error: vi.fn()
  };
  
  const routerSpy = {
    navigateByUrl: vi.fn()
  };

  beforeEach(() => {
    vi.clearAllMocks();

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([errorInterceptor])),
        provideHttpClientTesting(),
        { provide: ToastService, useValue: toastServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should handle 404 by navigating to /not-found', () => {
    httpClient.get('/test').subscribe({
      next: () => expect.fail('should have failed with 404'),
      error: () => {}
    });

    const req = httpMock.expectOne('/test');
    req.flush('Not Found', { status: 404, statusText: 'Not Found' });

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/not-found');
  });

  it('should handle 500 by navigating to /server-error', () => {
    const errorResponse = { message: 'Internal Server Error', details: 'Stack trace' };
    
    httpClient.get('/test').subscribe({
      next: () => expect.fail('should have failed with 500'),
      error: () => {}
    });

    const req = httpMock.expectOne('/test');
    req.flush(errorResponse, { status: 500, statusText: 'Internal Server Error' });

    // In Vitest/Jest: expect(spy).toHaveBeenCalledWith(arg1, expect.objectContaining({...}))
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/server-error', expect.objectContaining({
      state: { error: errorResponse }
    }));
  });

  it('should handle 401 by showing toast', () => {
    httpClient.get('/test').subscribe({
      next: () => expect.fail('should have failed with 401'),
      error: () => {}
    });

    const req = httpMock.expectOne('/test');
    req.flush('Unauthorized', { status: 401, statusText: 'Unauthorized' });

    expect(toastServiceSpy.error).toHaveBeenCalled();
  });

  it('should handle 400 with no validation errors by showing toast', () => {
    httpClient.get('/test').subscribe({
      next: () => expect.fail('should have failed with 400'),
      error: () => {}
    });

    const req = httpMock.expectOne('/test');
    req.flush('Bad Request', { status: 400, statusText: 'Bad Request' });

    expect(toastServiceSpy.error).toHaveBeenCalled();
  });

  it('should handle 400 with validation errors by re-throwing', () => {
    const validationErrors = { errors: { field: ['Error'] } };
    
    httpClient.get('/test').subscribe({
      next: () => expect.fail('should have failed with 400'),
      error: (error) => {
        expect(error.status).toBe(400);
      }
    });

    const req = httpMock.expectOne('/test');
    req.flush(validationErrors, { status: 400, statusText: 'Bad Request' });

    expect(toastServiceSpy.error).not.toHaveBeenCalled();
  });
});
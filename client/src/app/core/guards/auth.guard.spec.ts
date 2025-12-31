import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { authGuard } from './auth.guard';
import { AccountService } from '../services/account.service';
import { ToastService } from '../services/toast.service';
import { signal } from '@angular/core';
import { vi } from 'vitest';

describe('authGuard', () => {
  let accountServiceMock: any;
  let toastServiceMock: any;
  let routerMock: any;

  beforeEach(() => {
    accountServiceMock = {
      currentUser: signal<any>(null)
    };
    toastServiceMock = {
      error: vi.fn()
    };
    routerMock = {
      navigateByUrl: vi.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: AccountService, useValue: accountServiceMock },
        { provide: ToastService, useValue: toastServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    });
  });

  it('should return true if user is logged in', () => {
    accountServiceMock.currentUser.set({ displayName: 'Test' });

    const result = TestBed.runInInjectionContext(() => authGuard({} as any, {} as any));

    expect(result).toBe(true);
  });

  it('should return false, show toast and navigate to home if user is not logged in', () => {
    accountServiceMock.currentUser.set(null);

    const result = TestBed.runInInjectionContext(() => authGuard({} as any, {} as any));

    expect(result).toBe(false);
    expect(toastServiceMock.error).toHaveBeenCalledWith("Devi essere loggato per accedere a questa sezione");
    expect(routerMock.navigateByUrl).toHaveBeenCalledWith('/');
  });
});

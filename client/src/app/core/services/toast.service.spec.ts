import { TestBed } from '@angular/core/testing';
import { ToastService } from './toast.service';
import { vi } from 'vitest';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    vi.useFakeTimers();
    TestBed.configureTestingModule({
      providers: [ToastService],
    });
    service = TestBed.inject(ToastService);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a success toast', () => {
    service.success('Success message');
    const toasts = service.toasts();
    expect(toasts.length).toBe(1);
    expect(toasts[0].message).toBe('Success message');
    expect(toasts[0].type).toBe('success');
  });

  it('should add an error toast', () => {
    service.error('Error message');
    const toasts = service.toasts();
    expect(toasts.length).toBe(1);
    expect(toasts[0].type).toBe('error');
  });

  it('should add an info toast', () => {
    service.info('Info message');
    const toasts = service.toasts();
    expect(toasts.length).toBe(1);
    expect(toasts[0].type).toBe('info');
  });

  it('should add a warning toast', () => {
    service.warning('Warning message');
    const toasts = service.toasts();
    expect(toasts.length).toBe(1);
    expect(toasts[0].type).toBe('warning');
  });

  it('should remove a toast after 5 seconds', () => {
    service.success('Auto remove message');
    expect(service.toasts().length).toBe(1);

    vi.advanceTimersByTime(5000);

    expect(service.toasts().length).toBe(0);
  });

  it('should remove a specific toast by id', () => {
    service.success('Message 1');
    const id = service.toasts()[0].id;
    service.remove(id);
    expect(service.toasts().length).toBe(0);
  });
});

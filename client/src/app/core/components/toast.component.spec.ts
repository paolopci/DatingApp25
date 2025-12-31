import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastComponent } from './toast.component';
import { ToastService } from '../services/toast.service';
import { signal } from '@angular/core';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;
  let mockToastService: Partial<ToastService>;

  beforeEach(async () => {
    mockToastService = {
      toasts: signal([
        { id: 1, message: 'Success Message', type: 'success' },
        { id: 2, message: 'Error Message', type: 'error' }
      ]),
      remove: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [ToastComponent],
      providers: [
        { provide: ToastService, useValue: mockToastService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display toasts from service', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const alertElements = compiled.querySelectorAll('.alert');
    expect(alertElements.length).toBe(2);
    expect(alertElements[0].textContent).toContain('Success Message');
    expect(alertElements[1].textContent).toContain('Error Message');
  });

  it('should apply correct CSS classes based on toast type', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const alertElements = compiled.querySelectorAll('.alert');
    expect(alertElements[0].classList.contains('alert-success')).toBe(true);
    expect(alertElements[1].classList.contains('alert-error')).toBe(true);
  });

  it('should call remove when clicking on a toast (if implemented as clickable)', () => {
    // Nota: Se decidiamo di rendere i toast cliccabili per la rimozione manuale
    const compiled = fixture.nativeElement as HTMLElement;
    const alertElement = compiled.querySelector('.alert') as HTMLElement;
    alertElement.click();
    expect(mockToastService.remove).toHaveBeenCalledWith(1);
  });
});

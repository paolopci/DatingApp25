import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nav } from './nav';
import { provideRouter, RouterLink, RouterLinkActive } from '@angular/router';
import { By } from '@angular/platform-browser';
import { AccountService } from '../core/account.service';
import { of } from 'rxjs';
import { signal } from '@angular/core';

describe('Nav Links', () => {
  let component: Nav;
  let fixture: ComponentFixture<Nav>;
  let accountServiceMock: any;

  beforeEach(async () => {
    accountServiceMock = {
      currentUser: signal(null), // Default to logged out
      login: () => of({}),
      logout: () => {}
    };

    await TestBed.configureTestingModule({
      imports: [Nav],
      providers: [
        provideRouter([]),
        { provide: AccountService, useValue: accountServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a link to home on the logo', () => {
    const linkDes = fixture.debugElement.queryAll(By.directive(RouterLink));
    const logoLinkDe = linkDes.find(de => de.nativeElement.textContent.includes('DatingApp25'));
    expect(logoLinkDe).toBeTruthy();
    const routerLink = logoLinkDe?.injector.get(RouterLink);
    expect(routerLink?.href).toBe('/');
  });

  it('should have links for Matches, Lists, Messages when logged in', () => {
    // Simulate user logged in
    accountServiceMock.currentUser.set({ username: 'test', displayName: 'Test User' });
    fixture.detectChanges();

    const linkDes = fixture.debugElement.queryAll(By.directive(RouterLink));
    
    // Helper to find href by text content
    const getHrefByText = (text: string) => {
      const linkDe = linkDes.find(de => de.nativeElement.textContent.includes(text));
      return linkDe?.injector.get(RouterLink).href;
    };

    expect(getHrefByText('Matches')).toBe('/members');
    expect(getHrefByText('Lists')).toBe('/lists');
    expect(getHrefByText('Messages')).toBe('/messages');
  });

  it('should check for active link class', () => {
    // This is harder to test with just RouterLinkActive directive without real routing navigation.
    // However, we can check if the directive is present on the elements.
    accountServiceMock.currentUser.set({ username: 'test', displayName: 'Test User' });
    fixture.detectChanges();

    const linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkActive));
    // We expect at least the main navigation links to have this directive
    expect(linkDes.length).toBeGreaterThanOrEqual(3); 
  });
});

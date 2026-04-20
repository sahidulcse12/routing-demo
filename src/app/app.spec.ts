import { Location } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the configured app title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Angular Routing App');
  });

  it('should redirect from "/" to "/home"', async () => {
    const harness = await RouterTestingHarness.create();
    const location = TestBed.inject(Location);

    await harness.navigateByUrl('/');

    expect(location.path()).toBe('/home');
    expect(harness.fixture.nativeElement.textContent).toContain('User List');
  });

  it('should render about page for "/about"', async () => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/about');

    expect(harness.fixture.nativeElement.textContent).toContain('Angular Learning App');
  });

  it('should render dynamic user route for "/user/:id"', async () => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/user/42');

    expect(harness.fixture.nativeElement.textContent).toContain('User ID: 42');
  });

  it('should redirect "/dashboard" to "/dashboard/overview"', async () => {
    const harness = await RouterTestingHarness.create();
    const location = TestBed.inject(Location);

    await harness.navigateByUrl('/dashboard');

    expect(location.path()).toBe('/dashboard/overview');
    expect(harness.fixture.nativeElement.textContent).toContain('Dashboard Overview');
  });

  it('should render not found page for unknown routes', async () => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/unknown-path');

    expect(harness.fixture.nativeElement.textContent).toContain('404 Error');
  });
});

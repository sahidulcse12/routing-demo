import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 3 users', () => {
    expect(component.users.length).toBe(3);
  });

  it('should return home page message', () => {
    expect(component.message()).toContain('Angular Routing Demo Application');
  });

  it('should render user names', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Rahim');
    expect(compiled.textContent).toContain('Karim');
    expect(compiled.textContent).toContain('Sakib');
  });
});

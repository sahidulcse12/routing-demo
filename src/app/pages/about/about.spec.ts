import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About } from './about';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose company name', () => {
    expect(component.companyName).toBe('Angular Learning App');
  });

  it('should return about information', () => {
    expect(component.getInfo()).toContain('learning Angular Routing');
  });

  it('should render about content', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('About');
    expect(compiled.textContent).toContain('Angular Learning App');
  });
});

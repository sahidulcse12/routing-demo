import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFound } from './not-found';

describe('NotFound', () => {
  let component: NotFound;
  let fixture: ComponentFixture<NotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFound],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose 404 error code', () => {
    expect(component.errorCode).toBe(404);
  });

  it('should return not found message', () => {
    expect(component.getMessage()).toContain('Page not found');
  });

  it('should render error details', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('404');
    expect(compiled.textContent).toContain('Page not found');
  });
});

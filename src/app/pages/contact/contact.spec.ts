import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose contact details', () => {
    expect(component.email).toBe('support@angulardemo.com');
    expect(component.phone).toBe('+880-123-456-789');
  });

  it('should return combined contact information', () => {
    const info = component.getContactInfo();
    expect(info).toContain(component.email);
    expect(info).toContain(component.phone);
  });

  it('should render contact details', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Contact');
    expect(compiled.textContent).toContain('support@angulardemo.com');
  });
});

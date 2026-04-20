import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  email: string = 'support@angulardemo.com';
  phone: string = '+880-123-456-789';

  getContactInfo(): string {
    return `Email: ${this.email} | Phone: ${this.phone}`;
  }
}

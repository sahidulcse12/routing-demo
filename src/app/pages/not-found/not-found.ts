import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  errorCode: number = 404;

  getMessage(): string {
    return 'Page not found. Please check the URL.';
  }
}

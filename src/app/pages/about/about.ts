import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  companyName: string = 'Angular Learning App';

  getInfo(): string {
    return 'We are learning Angular Routing step by step';
  }
}

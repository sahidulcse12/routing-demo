import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface User{
  id:number;
  name:string;
  role:string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink,NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title: string = 'Welcome to Home Page';

  users: User[] = [
    { id: 1, name: 'Rahim', role: 'Developer' },
    { id: 2, name: 'Karim', role: 'Designer' },
    { id: 3, name: 'Sakib', role: 'Manager' }
  ];

  message():string{
     return 'This is Angular Routing Demo Application';
  }
}

import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p class="bg-red-500">
      home works!
      <button (click)="signOut()">logout</button>
    </p>
  `,
  styles: [],
})
export class HomeComponent {
  constructor(private router: Router) {}
  signOut() {
    sessionStorage.removeItem('loginUser');

    this.router.navigate(['login']);
  }
}

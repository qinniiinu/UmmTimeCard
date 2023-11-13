import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>error-page works!</p> `,
  styles: [],
})
export class ErrorPageComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ol class="breadcrumb">
      <li><a href="#">one </a></li>
      <li><a href="#">second</a></li>
      <li><a href="#">three</a></li>
      <li><a href="#">four</a></li>
    </ol>
  `,
  styles: [
    `
      .breadcrumb {
        @apply flex m-3;
        li {
          @apply block;
          &:not(:last-child):after {
            content: '   |    ';
          }
          a {
            @apply p-2 m-2 bg-blue-300;
          }
        }
      }
    `,
  ],
})
export class NavigationComponent {}

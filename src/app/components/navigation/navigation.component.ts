import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterChangeHandlerService } from 'src/app/router-change-handler.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ol class="breadcrumb">
      <li *ngFor="let item of routeList">
        <a href="#">{{ item }} </a>
      </li>
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
export class NavigationComponent {
  routeList!: string[];
  constructor(private routerChangeHandlerService: RouterChangeHandlerService) {
    this.routerChangeHandlerService.routerChangeRouterList.subscribe(
      (res) => (this.routeList = res)
    );
  }
}

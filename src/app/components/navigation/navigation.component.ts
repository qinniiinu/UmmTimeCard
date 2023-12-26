import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterChangeHandlerService } from 'src/app/router-change-handler.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ol class="breadcrumb">
      <li *ngFor="let item of breadcrumb">
        <a href="#">{{ item.name }} |{{ item.filterCondition }}</a>
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
  breadcrumb: Breadcrumb[] = [];
  constructor(private routerChangeHandlerService: RouterChangeHandlerService) {
    this.routerChangeHandlerService.routerChangeRouterList.subscribe((res) => {
      if (res instanceof Array) {
        this.breadcrumb = res;
      } else {
        this.breadcrumb.push(res);
      }
    });
  }
}

export interface Breadcrumb {
  /**顯示名稱 */
  name: string;
  /**型態 */
  breadType: string;
  /**過濾條件 */
  filterCondition: string;
}

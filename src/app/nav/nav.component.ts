import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from '../components/home/home.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
  selector: 'app-nav',
  standalone: true,
  template: `<div class="w-screen h-screen">
    <mat-toolbar color="primary">
      <div class="w-96 h-36 flex-grow">LOGO</div>
      <button mat-raised-button (click)="signOut()">logout</button>
    </mat-toolbar>

    <mat-sidenav-container class="bg-gray-400 content" [hasBackdrop]="false">
      <mat-sidenav
        [mode]="'side'"
        [opened]="true"
        disableClose
        class="w-1/4 h-full outline-2 outline-cyan-200 outline-dotted"
      >
        <cdk-accordion class="example-accordion">
          <cdk-accordion-item
            *ngFor="let item of items; let index = index"
            #accordionItem="cdkAccordionItem"
            class="example-accordion-item"
            role="button"
            tabindex="0"
            [attr.id]="'accordion-header-' + index"
            [attr.aria-expanded]="accordionItem.expanded"
            [attr.aria-controls]="'accordion-body-' + index"
          >
            <div class="bg-yellow-300" (click)="accordionItem.toggle()">
              {{ item }}
              <span class="example-accordion-item-description">
                Click to {{ accordionItem.expanded ? 'close' : 'open' }}
              </span>
            </div>

            <div
              class="bg-yellow-400"
              role="region"
              [style.display]="accordionItem.expanded ? '' : 'none'"
              [attr.id]="'accordion-body-' + index"
              [attr.aria-labelledby]="'accordion-header-' + index"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi
              incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo
              autem iure aliquid ullam rem tenetur deserunt velit culpa?
            </div>
          </cdk-accordion-item>
        </cdk-accordion>
      </mat-sidenav>

      <mat-sidenav-content>
        <app-navigation></app-navigation>
        <app-search-bar></app-search-bar>
        <app-home></app-home>
      </mat-sidenav-content>
    </mat-sidenav-container>
  </div> `,
  styles: [
    `
      .content {
        height: calc(100vh - 64px);
      }
    `,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    HomeComponent,
    NavigationComponent,
    SearchBarComponent,
    NgFor,
    CdkAccordionModule,
  ],
})
export class NavComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  constructor(private router: Router) {}

  signOut() {
    sessionStorage.removeItem('loginUser');

    this.router.navigate(['login']);
  }
}

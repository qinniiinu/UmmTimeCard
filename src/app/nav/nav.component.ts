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
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  template: ` <div class="w-screen h-screen">
    <mat-toolbar color="primary">
      <span class="w-96 flex-grow bg-blend-color-dodge">asdasdasdas</span>
      <button mat-raised-button (click)="signOut()">logout</button>
    </mat-toolbar>
    <mat-sidenav-container hasBackdrop="false" class="content bg-slate-400">
      <mat-sidenav opened disableClose mode="side" class="w-1/4">
        <app-sidebar></app-sidebar>
      </mat-sidenav>
      <mat-sidenav-content>
        <app-navigation></app-navigation>
        <app-search-bar></app-search-bar>
        <app-home></app-home>
      </mat-sidenav-content>
    </mat-sidenav-container>
  </div>`,
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
    RouterModule,
    SidebarComponent,
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

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatExpansionModule],
  template: `
    <mat-accordion>
      <mat-expansion-panel hideToggle>
        <mat-expansion-panel-header>
          <mat-panel-title> 組織 </mat-panel-title>
        </mat-expansion-panel-header>

        <button mat-button color="primary" (click)="go('addressBook')">通訊錄</button>
        <button mat-button color="primary" (click)="go('fieldStaff')">外勤人員</button>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: [],
})
export class SidebarComponent {
  panelOpenState = false;

  router = inject(Router);

  go(str: string) {
    this.router.navigateByUrl(`/home/${str}`);
  }
}

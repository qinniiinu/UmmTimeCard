import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Region, Staff } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  template: `
    <mat-table [dataSource]="dataSource" class="w-full">
      <!-- Position Column -->
      <ng-container [matColumnDef]="column" *ngFor="let column of displayedColumns">
        <th mat-header-cell *matHeaderCellDef>{{ column }}</th>
        <td mat-cell *matCellDef="let element" (click)="gogo(element)">{{ element[column] }}</td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </mat-table>
  `,
  styles: [],
})
export class TableComponent {
  @Input() displayedColumns: string[] = [];
  _dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @Input() set data(data: Region[] | Staff[]) {
    this._dataSource.data = data;
  }

  get dataSource() {
    return this._dataSource;
  }

  @Output() go = new EventEmitter<any>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  gogo(row: Staff) {
    console.log(row);
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParams: { name: row.staffNumber },
      queryParamsHandling: 'merge',
    });
  }
}

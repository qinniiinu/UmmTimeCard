import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges } from '@angular/core';
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
      <ng-container [matColumnDef]="column.col" *ngFor="let column of Columns">
        <th mat-header-cell *matHeaderCellDef>{{ column.colName }}</th>
        <td mat-cell *matCellDef="let element" (click)="gogo(element)">
          {{ element[column.col] }}
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </mat-table>
  `,
  styles: [],
})
export class TableComponent {
  @Input() Columns!: ColumnVM[];
  _dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns!: string[];

  @Input() set data(data: Region[] | Staff[]) {
    this._dataSource.data = data;
  }

  get dataSource() {
    return this._dataSource;
  }

  @Output() go = new EventEmitter<any>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnChanges() {
    this.displayedColumns = this.Columns.map((item) => item.col);
  }

  gogo(row: Staff) {
    console.log(row);
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParams: { name: row.staffNumber },
      queryParamsHandling: 'merge',
    });
  }
}
export interface ColumnVM {
  col: string;
  colName: string;
}

type T = Region | Staff;

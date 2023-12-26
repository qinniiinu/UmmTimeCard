import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Location, Region, Staff } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterChangeHandlerService } from 'src/app/router-change-handler.service';
import { Breadcrumb } from 'src/app/components/navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  template: ` <mat-table [dataSource]="dataSource" class="w-full">
    <!-- Position Column -->
    <ng-container [matColumnDef]="column.col" *ngFor="let column of Columns">
      <th mat-header-cell *matHeaderCellDef>{{ column.colName }}</th>
      <td mat-cell *matCellDef="let element">
        <div [ngSwitch]="column.col">
          <ng-container *ngSwitchCase="'action'">
            <button mat-raised-button (click)="goLocation(element)">區域</button>
            <button mat-raised-button (click)="gogo(element)">人員</button>
          </ng-container>
          <ng-container *ngSwitchCase="'isValid'">
            <button mat-raised-button (click)="gogo(element)" *ngIf="element['SuperiorNumber']">
              轄下
            </button>
          </ng-container>
          <ng-container *ngSwitchDefault>{{ element[column.col] }}</ng-container>
        </div>
      </td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
  </mat-table>`,
  styles: [],
})
export class TableComponent implements OnInit {
  @Input() Columns!: ColumnVM[];
  _dataSource: MatTableDataSource<unknown> = new MatTableDataSource();

  displayedColumns!: string[];

  @Input() set data(data: T[]) {
    this._dataSource.data = data;
  }

  get dataSource() {
    return this._dataSource;
  }

  @Output() go = new EventEmitter<unknown>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private routerChangeHandlerService: RouterChangeHandlerService
  ) {}

  ngOnInit() {
    this.displayedColumns = this.Columns.map((item) => item.col);
  }

  /** 導航員工列表 */
  gogo(row: T) {
    console.log(row);
    const breadcrumb = {} as Breadcrumb;
    if ('region' in row) {
      breadcrumb.name = row.region;
      console.log(row);
      breadcrumb.breadType = 'region';
      breadcrumb.filterCondition = row.region;
    }

    if ('userName' in row) {
      breadcrumb.name = row.userName;
      breadcrumb.breadType = 'staff';
      breadcrumb.filterCondition = row.userId;
    }

    console.log(breadcrumb);
    this.routerChangeHandlerService.setRouterChangeRouterList(breadcrumb);
    this.router.navigate(['/home', 'fieldStaff'], { queryParams: { name: row.region } });
  }

  goLocation(row: Location) {
    const breadcrumb = {} as Breadcrumb;
    breadcrumb.name = row.region;
    breadcrumb.breadType = 'location';
    breadcrumb.filterCondition = row.location;
    this.routerChangeHandlerService.setRouterChangeRouterList(breadcrumb);
  }
}
export interface ColumnVM {
  col: string;
  colName: string;
}

export type T = Region | Staff;

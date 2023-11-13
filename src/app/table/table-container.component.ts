import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { ApiService, Region, Staff } from '../api.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterChangeHandlerService } from '../router-change-handler.service';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-table-container',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, TableComponent],
  template: `
    <div class="bg-yellow-400 m-2">
      <app-table [data]="data" [displayedColumns]="dataColumns" (gogo)="go()"></app-table>

      page : {{ page }} data :
    </div>
  `,
  styles: [],
})
export class TableContainerComponent implements OnInit {
  page = 1;
  data!: Region[] | Staff[];
  routeList!: string[];
  dataColumns!: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    private routerChangeHandlerService: RouterChangeHandlerService
  ) {
    this.page = this.activatedRoute.snapshot.params['page'] || 1;

    this.routerChangeHandlerService.routerChangeRouterList.subscribe(
      (res) => (this.routeList = res)
    );
  }

  ngOnInit(): void {
    switch (this.routeList.reverse()[0]) {
      case 'fieldStaff':
        this.getStaff();
        return;
      case 'addressBook':
        this.getRegion();
        return;
    }
  }

  getStaff() {
    this.api.getStaff().subscribe((res) => {
      const staffList = res.map((e) => e.staffName);
      res.forEach((element) => (element.isValid = staffList.includes(element.SuperiorNumber)));
      this.setTableData(res);
    });
  }

  getRegion() {
    this.api.getRegion().subscribe((res) => {
      this.setTableData(res);
    });
  }

  setTableData(data: Region[] | Staff[]) {
    this.data = data;
    this.dataColumns = [...Object.keys(data[0]), 'action'];
  }

  go() {}
}

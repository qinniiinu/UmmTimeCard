import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { ApiService, Region, Staff } from '../api.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterChangeHandlerService } from '../router-change-handler.service';
import { ColumnVM, T, TableComponent } from './table/table.component';
import { Breadcrumb } from '../components/navigation/navigation.component';

@Component({
  selector: 'app-table-container',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, TableComponent],
  template: ` <div class="bg-yellow-400 m-2">
    <app-table [data]="data" [Columns]="Columns" (gogo)="go()"></app-table>page : {{ page }} data :
  </div>`,
  styles: [],
})
export class TableContainerComponent implements OnInit {
  page = 1;
  data: T[] = [];
  routeList: Breadcrumb[] = [];
  Columns!: ColumnVM[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    private routerChangeHandlerService: RouterChangeHandlerService
  ) {
    this.page = this.activatedRoute.snapshot.params['page'] || 1;
    this.routerChangeHandlerService.routerChangeRouterList.subscribe((res) => {
      if (Array.isArray(res)) {
        this.routeList = res;
      } else if ('breadType' in res) {
        this.routeList.push(res);
        console.log('麵包穴');

        console.log(`路由切換${res}`);

        // eslint-disable-next-line no-inner-declarations
        function findSubordinates(superior: string, list: Staff[]) {
          const subordinates = list.filter((item) => item.SuperiorNumber === superior);
          let allSubordinates = [...subordinates];

          subordinates.forEach((element) => {
            allSubordinates = allSubordinates.concat(findSubordinates(element.userId, list));
          });
          return subordinates;
        }
        if (res.breadType === 'staff')
          this.data = findSubordinates(res.filterCondition, this.data as Staff[]);
        if (res.breadType === 'region')
          this.data = this.data.filter((item) => res.filterCondition === item.region);
      }
      console.log(res, 'url');
    });
  }

  ngOnInit(): void {
    switch (this.routeList[1].name) {
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
      const staffList = res.map((e) => e.userName);
      res.forEach((element) => (element.isValid = staffList.includes(element.SuperiorNumber)));
      this.setTableData(res);
    });
  }

  getRegion() {
    this.api.getRegion().subscribe((res) => {
      this.setTableData(res);
    });
  }

  setTableData(data: T[]) {
    this.data = data;
    const list = Object.entries(data[0]);

    this.Columns = list.map((item) => ({
      col: item[0],
      colName: ColName.colName[item[0] as Col],
    }));

    this.Columns.push({ col: 'action', colName: '動作' });
  }

  go() {}
}

export enum Col {
  createDate = 'createDate',
  id = 'id',
  userName = 'userName',
  userId = 'userId',
  region = 'region',
  locationNumber = 'locationNumber',
  gender = 'gender',
  phone = 'phone',
  jobName = 'jobName',
  arrivalDate = 'arrivalDate',
  isValid = 'isValid',
  SuperiorNumber = 'SuperiorNumber',
}

export type ColNameType = {
  [key in Col]: string;
};
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ColName {
  export const colName: ColNameType = {
    id: '編號',
    createDate: '創建日期',
    userName: '姓名',
    userId: '代號',
    region: '區域',
    locationNumber: '處代號',
    gender: '性別',
    phone: '電話',
    jobName: '職稱',
    arrivalDate: '入值日期',
    isValid: '狀態',
    SuperiorNumber: '操作',
  };
}

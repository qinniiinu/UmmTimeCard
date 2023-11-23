import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-member-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule],
  template: `
    <div mat-dialog-title>新增/編輯</div>
    <mat-dialog-content class="bg-blue-200">
      <form [formGroup]="form" class="flex flex-col">
        <div class="">
          <div class="w1/4">區域</div>
          <input type="text" formControlName="location" />
        </div>
        <div class="">
          <div class="w1/4">通訊處</div>
          <input type="text" formControlName="regionCode" />
        </div>

        <div class="">
          <div class="w1/4">姓名</div>
          <input type="text" formControlName="userName" />
        </div>
        <div class="">
          <div class="w1/4">性別</div>
          <input type="text" formControlName="gender" />
        </div>
        <div class="">
          <div class="w1/4">電話</div>
          <input type="text" formControlName="phoneNumber" />
        </div>
        <div class="">
          <div class="w1/4">職稱</div>
          <input type="text" formControlName="jobTitle" />
        </div>
        <div class="">
          <div class="w1/4">入職日期</div>
          <input type="text" formControlName="joinDate" />
        </div>
        <div class="">
          <div class="w1/4">是否有效</div>
          <input type="text" formControlName="status" />
        </div>
      </form>
    </mat-dialog-content>
  `,
  styles: [],
})
export class MemberEditorComponent {
  form!: FormGroup;
  constructor(
    public matDialogRef: MatDialogRef<MemberEditorComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { mode: T }
  ) {
    this.form = this.fb.group({
      regionCode: [10011, Validators.required],

      userName: ['phoebe', Validators.required],
      gender: ['m', Validators.required],
      phoneNumber: ['0912345678', Validators.required],
      jobTitle: ['職員', Validators.required],
      joinDate: ['2023-01-01T00:00:00Z', Validators.required],
      status: [true, Validators.required],
      // superior: ['',Validators.required],
      // userId: ['b005', Validators.required],
    });
  }
}

// {
//   "userId": "b005",
//   "userName": "phoebe",
//   "regionCode": 10011,
//   "gender": "m",
//   "phoneNumber": "0912345678",
//   "jobTitle": "職員",
//   "joinDate": "2023-01-01T00:00:00Z",
//   "status": true,
//   "superior": ""
// }
type T = 'A' | 'E';

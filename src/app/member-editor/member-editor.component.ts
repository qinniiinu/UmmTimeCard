import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-member-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule],
  template: ` <div mat-dialog-title>新增/編輯</div> `,
  styles: [],
})
export class MemberEditorComponent {
  constructor(
    public matDialogRef: MatDialogRef<MemberEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mode: T }
  ) {}
}

type T = 'A' | 'E';

import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  template: `
    <mat-card class="w-1/2">
      <mat-card-content>
        <form [formGroup]="form" (ngSubmit)="login()">
          <mat-form-field>
            login<input matInput type="text" formControlName="loginId" />
          </mat-form-field>
          <mat-form-field>
            password<input matInput type="password" formControlName="password" />
          </mat-form-field>
          <button class="bg-blue-400" mat-button type="submit" [disabled]="form.invalid">
            Login
          </button>
        </form>
      </mat-card-content>
    </mat-card>
  `,

  styles: [],
})
export class LoginComponent {
  form = this.fb.group({
    loginId: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {}

  login(): void {
    const { loginId, password } = this.form.value;

    this.auth.getUserByEmail(loginId as string).subscribe((res) => {
      console.log(res, 'rees');
      if (res) {
        this.router.navigate([`home`]);
        sessionStorage.setItem('loginUser', String(res));
      }
    });
  }
}

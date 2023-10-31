import { AppComponent } from './app.component';
import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  {
    path: '',
    component: AppComponent,
  },
];

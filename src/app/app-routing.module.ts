import { AppComponent } from './app.component';
import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { NavComponent } from './nav/nav.component';

export const ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'home', component: NavComponent, canActivate: [authGuard] },
  {
    path: '',
    component: AppComponent,
  },
];

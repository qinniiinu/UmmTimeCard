import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { NavComponent } from './nav/nav.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TableContainerComponent } from './table/table-container.component';

export const ROUTES: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: NavComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'region',
        component: TableContainerComponent,
      },
      {
        path: 'addressBook',
        component: TableContainerComponent,
      },
      {
        path: 'fieldStaff',
        component: TableContainerComponent,
      },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '404',
    component: ErrorPageComponent,
  },
];

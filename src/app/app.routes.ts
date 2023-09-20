import { Routes } from '@angular/router';
import { routesConfig } from './config/routes';
export const routes: Routes = [

  {
    path: routesConfig.dashboard.routerPath,
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    loadChildren: () =>
      import('./dashboard.routes').then((r) => r.dashboardroutes),
  },
  {
    path: routesConfig.signup.routerPath,
    loadComponent: () =>
      import('./pages/signup/signup.component').then((c) => c.SignupComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard/home',
  },
  {
    //TODO create a not found page
    path:'*',
    redirectTo:'/dashboard',
  }
];

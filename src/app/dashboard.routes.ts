import { Routes } from '@angular/router';

export const dashboardroutes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/dashboard-home/dashboard-home.component').then(
        (c) => c.DashboardHomeComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

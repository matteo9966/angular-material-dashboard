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
    path: 'table-data',
    loadComponent: () =>
      import('./pages/dashboard-table-data/dashboard-table-data.component').then(
        (c) => c.DashboardTableDataComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

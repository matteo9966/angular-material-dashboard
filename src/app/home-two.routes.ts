import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    loadChildren: () =>
      import('./dashboard.routes').then((d) => d.dashboardroutes),
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];

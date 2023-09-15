import { Routes } from '@angular/router';
import { routesConfig } from './config/routes';
export const dashboardroutes: Routes = [
  {
    path: routesConfig.dashboard.childRoutes.home.routerPath,
    loadComponent: () =>
      import('./pages/dashboard-home/dashboard-home.component').then(
        (c) => c.DashboardHomeComponent
      ),
  },
  {
    path: routesConfig.dashboard.childRoutes.tableData.routerPath,
    loadComponent: () =>
      import(
        './pages/dashboard-table-data/dashboard-table-data.component'
      ).then((c) => c.DashboardTableDataComponent),
  },
  {
    path: routesConfig.dashboard.childRoutes.profile.routerPath,
    loadComponent: () =>
      import('./pages/dashboard-profile/dashboard-profile.component').then(
        (c) => c.DashboardProfileComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: routesConfig.dashboard.childRoutes.home.routerPath,
  },
];

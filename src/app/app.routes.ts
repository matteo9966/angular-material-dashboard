import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home-one',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
    loadChildren: () => import('./home.routes').then((r) => r.routes),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    loadChildren: () =>
      import('./dashboard.routes').then((r) => r.dashboardroutes),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/signup/signup.component').then((c) => c.SignupComponent),
  },

  {
    path: 'main',
    loadComponent: () =>
      import('./pages/main/main.component').then((c) => c.MainComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
];

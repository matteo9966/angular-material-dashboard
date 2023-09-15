import { Routes } from '@angular/router';
import { routesConfig } from './config/routes';
export const routes: Routes = [
  // {
  //   path: 'home-one',
  //   loadComponent: () =>
  //     import('./pages/home/home.component').then((c) => c.HomeComponent),
  //   loadChildren: () => import('./home.routes').then((r) => r.routes),
  // },
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

  // {
  //   path: 'main',
  //   loadComponent: () =>
  //     import('./pages/main/main.component').then((c) => c.MainComponent),
  // },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    //TODO create a not found page
    path:'*',
    redirectTo:'/dashboard',
  }
];

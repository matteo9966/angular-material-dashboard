import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home-one',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
    loadChildren: () => import('./home.routes').then((r) => r.routes),
  },
  {
    path: 'home-two',
    loadComponent: () =>
      import('./pages/home-two/home-two.component').then(
        (c) => c.HomeTwoComponent
      ),
    loadChildren: () => import('./home-two.routes').then((r) => r.routes),
  },
  {
    path: 'main',
    loadComponent: () =>
      import('./pages/main/main.component').then((c) => c.MainComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main',
  },
];

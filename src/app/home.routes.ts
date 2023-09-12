import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home-subscribe/home-subscribe.component').then(
        (c) => c.HomeSubscribeComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'where-to-find-us',
    loadComponent: () =>
      import('./pages/where-to-find-us/where-to-find-us.component').then(
        (c) => c.WhereToFindUsComponent
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.component/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./about.component/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'branches',
    loadComponent: () => import('./about.component/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'media',
    loadComponent: () => import('./about.component/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'events',
    loadComponent: () => import('./about.component/about.component').then((m) => m.AboutComponent),
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    pathMatch: 'full',
    title: 'Novalabs | Home',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
    title: 'Novalabs | About',
  },
];

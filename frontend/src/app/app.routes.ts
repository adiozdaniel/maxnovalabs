import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component').then((m) => m.AppComponent),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'stats',
        loadComponent: () =>
          import('./shared/stats/stats.component').then(
            (m) => m.StatsComponent
          ),
      },
      {
        path: 'clients',
        loadComponent: () =>
          import('./pages/clients/clients.component').then(
            (m) => m.ClientsComponent
          ),
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./pages/services/services.component').then(
            (m) => m.ServicesComponent
          ),
      },
      {
        path: 'portfolio',
        loadComponent: () =>
          import('./pages/portfolio/portfolio.component').then(
            (m) => m.PortfolioComponent
          ),
      },
      {
        path: 'team',
        loadComponent: () =>
          import('./pages/team/team.component').then((m) => m.TeamComponent),
      },
      {
        path: 'faqs',
        loadComponent: () =>
          import('./pages/faq/faq.component').then((m) => m.FaqComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

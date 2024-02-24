import { Routes } from '@angular/router';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing.component').then(
        (c) => c.LandingComponent
      ),
  },
];

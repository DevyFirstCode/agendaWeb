import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/citas', pathMatch: 'full' },
  { 
    path: 'citas', 
    loadComponent: () => import('./components/citas-list/citas-list.component')
      .then(m => m.CitasListComponent) 
  }
];
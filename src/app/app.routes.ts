import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
    loadChildren: () => import('./home.routes').then((r) => r.routes)
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

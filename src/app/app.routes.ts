import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'patient',
    loadComponent: () =>
      import('./patient/patient.component').then(c => c.PatientComponent)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then(c => c.HomeComponent)
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

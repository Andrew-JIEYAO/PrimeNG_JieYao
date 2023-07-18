import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'patient',
    loadComponent: () =>
      import('./patient/patient.component').then(c => c.PatientComponent)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(c => c.DashboardComponent)
  },
  {
    path: 'patient',
    loadComponent: () =>
      import('./patient/patient.component').then(c => c.PatientComponent)
  }
]

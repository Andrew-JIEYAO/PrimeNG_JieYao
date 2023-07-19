import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, PatientComponent, HomeComponent, RouterModule]
})
export class AppComponent {
  title = '竹銘醫院';
}

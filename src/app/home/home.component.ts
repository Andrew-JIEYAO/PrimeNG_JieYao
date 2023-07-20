import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { ButtonModule } from 'primeng/button';
import { MenuItem } from '../interface/menu';
import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, ImageModule, RouterModule, DashboardComponent, ButtonModule, MenuModule]
})
export class HomeComponent {
  title = 'Home';
  programItems?: MenuItem[];

  ngOnInit(): void {
    this.programItems = [
      {
        label: 'Options',
        items: [
          {
            label: '門診醫囑',
            icon: 'pi pi-user-plus',
            routerLink: '/home/patient'
          },
          {
            label: '心髒移植表單',
            icon: 'pi pi-heart-fill',
            command: () => {
              console.log('heartFill');
            }
          },
          {
            label: '電子病歷查詢',
            icon: 'pi pi-book',
            routerLink: ''
          }
        ]
      }
    ]
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, RouterOutlet, PanelMenuModule, SidebarModule, ButtonModule],
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  tabItems!: MenuItem[];
  sidebarVisible: boolean = false;

  ngOnInit(): void {
    this.fillMenu();
  }

  private fillMenu() {
    this.tabItems = [
      {
        label: '診斷開立',
        icon: 'pi pi-fw pi-copy',
        items: [
          {
            label: '自首查詢',
            routerLink: 'home',
            command: () => {this.sidebarVisible = false;}
          },
          {
            label: '專科診斷',
            routerLink: 'home',
            command: () => {this.sidebarVisible = false;}
          },
          {
            label: '常用分類',
            routerLink: 'home',
            command: () => {this.sidebarVisible = false;}
          }
        ]
      },
      {
        label: '住院醫囑系統',
        icon: 'pi pi-fw pi-user-edit',
        items: [
          {
            label: '病人選取',
            routerLink: 'home',
            command: () => {this.sidebarVisible = false;}
          },
          {
            label: '入院病歷紀錄',
            routerLink: 'home',
            command: () => {this.sidebarVisible = false;}
          },
          {
            label: '病程紀錄',
            routerLink: 'home',
            command: () => {this.sidebarVisible = false;}
          }
        ]
      },
    ]
  }
}

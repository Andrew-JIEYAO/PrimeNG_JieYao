import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
// import { FirstTestDemoComponent } from "./first-test-demo/first-test-demo.component";
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterLinkActive, RouterLink, RouterOutlet, TabMenuModule]
})
export class AppComponent {
  title = '竹銘醫院';

  tabItems!: MenuItem[];

  ngOnInit(): void {
    this.fillMenu();
  }

  fillMenu() {
    this.tabItems = [
      {
        label: 'Home',
        routerLink: 'home'
      },
      {
        label: 'Patient',
        routerLink: 'patient',
      },
    ]
  }
}

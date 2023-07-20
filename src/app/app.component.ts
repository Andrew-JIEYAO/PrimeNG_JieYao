import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterModule, LoginComponent,RouterOutlet]
})
export class AppComponent {
  title = '竹銘醫院';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstTestDemoComponent } from "./first-test-demo/first-test-demo.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, FirstTestDemoComponent]
})
export class AppComponent {
  title = 'primeng-demo';
}

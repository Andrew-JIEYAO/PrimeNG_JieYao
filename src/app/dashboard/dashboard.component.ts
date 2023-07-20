import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProgramComponent } from "../program/program.component";
import { NewsComponent } from "../news/news.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    imports: [CommonModule, RouterModule, ProgramComponent, NewsComponent]
})
export class DashboardComponent {

}

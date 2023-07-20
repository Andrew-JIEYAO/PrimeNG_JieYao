import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { News } from '../interface/news';
import { NewsService } from './news.service';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ProgramComponent } from "../program/program.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    imports: [CommonModule, TableModule, RouterModule, CardModule, ProgramComponent]
})
export class DashboardComponent {
  newses!: News[];
  newsService = inject(NewsService);

  ngOnInit(): void {
    this.newsService.getNewses().then((datas) => {
      this.newses = datas;
    })
  }
}

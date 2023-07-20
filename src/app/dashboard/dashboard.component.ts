import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { News } from '../interface/news';
import { NewsService } from './news.service';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TableModule, RouterModule, CardModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  newses!: News[];
  public newsService = inject(NewsService);

  ngOnInit(): void {
    this.newsService.getNewses().then((datas) => {
      this.newses = datas;
    })
  }
}

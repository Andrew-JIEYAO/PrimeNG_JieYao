import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { News } from '../interface/news';
import { NewsService } from '../dashboard/news.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule, TableModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  newses!: News[];
  newsService = inject(NewsService);

  ngOnInit(): void {
    this.newsService.getNewses().then((datas) => {
      this.newses = datas;
    })
  }
}

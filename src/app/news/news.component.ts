import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { News } from '../interface/news';
import { NewsService } from '../dashboard/news.service';
import { ScrollerModule } from 'primeng/scroller';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule, TableModule, ScrollerModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  newses!: News[];
  newsService = inject(NewsService);
  @Input() isDone: boolean = false;

  ngOnInit(): void {
    this.newsService.getNewses().then((datas) => {
      this.newses = this.isDone ? datas.filter((i) => i.isDone === true) : datas.filter((i) => i.isDone === false);
    })
  }
}

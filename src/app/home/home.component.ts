import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { NewsService } from './news.service';
import { News } from '../interface/news';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ImageModule, InputTextModule, PasswordModule, ButtonModule, RouterModule, TableModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Home';
  newses!: News[];

  public newsService = inject(NewsService);

  ngOnInit(): void {
    this.newsService.getProducts().then((datas) => {
      this.newses = datas;
    })
  }
}

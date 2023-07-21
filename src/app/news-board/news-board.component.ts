import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsComponent } from "../news/news.component";
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-news-board',
    standalone: true,
    templateUrl: './news-board.component.html',
    styleUrls: ['./news-board.component.css'],
    imports: [CommonModule, NewsComponent, RouterModule, TagModule, ButtonModule, InputTextModule]
})
export class NewsBoardComponent {
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ImageModule, InputTextModule, PasswordModule, ButtonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = '診斷開立相關頁籤';

}

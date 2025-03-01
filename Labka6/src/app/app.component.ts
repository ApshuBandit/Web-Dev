import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Подключаем маршруты
  template: `
    <nav>
      <a routerLink="/home">Home</a> |
      <a routerLink="/about">About</a> |
      <a routerLink="/albums">Albums</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }

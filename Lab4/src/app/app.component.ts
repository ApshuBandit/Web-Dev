import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component'; // Импортируем ProductsComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductsComponent], // Добавили ProductsComponent в imports
  template: `<app-products></app-products>`, // Используем компонент в шаблоне
})
export class AppComponent {}

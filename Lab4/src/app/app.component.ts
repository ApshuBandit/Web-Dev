import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';  // Добавляем ProductsComponent

@Component({
  selector: 'app-root',
  standalone: true,  // ВАЖНО!
  imports: [CommonModule, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
  
})
export class AppComponent {
  title = 'app';
}

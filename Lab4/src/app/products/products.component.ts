import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true, // Указываем, что компонент может быть использован отдельно
  imports: [CommonModule], // Импортируем CommonModule для работы *ngFor
  template: `
    <div class="products-container">
      <div *ngFor="let product of products" class="product-card">
        <div class="image-gallery">
          <img [src]="product.image[0]" (click)="changeImage(product, 0)" class="main-image" />
          <div class="thumbnail-gallery">
            <img *ngFor="let img of product.image; let i = index" [src]="img" (click)="changeImage(product, i)" class="thumbnail" />
          </div>
        </div>
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Rating: {{ product.rating }}/5</p>
        <div class="buttons">
          <a [href]="getShareLink('whatsapp', product.link)" target="_blank">Share on WhatsApp</a>
          <a [href]="getShareLink('telegram', product.link)" target="_blank">Share on Telegram</a>
        </div>
      </div>
    </div>
  `,
})
export class ProductsComponent {
  products = [
    {
      image: ['https://kaspi.kz/image1.jpg', 'https://kaspi.kz/image2.jpg', 'https://kaspi.kz/image3.jpg'],
      name: 'Product 1',
      description: 'Description of product 1',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/product1'
    },
    {
      image: ['https://kaspi.kz/image4.jpg', 'https://kaspi.kz/image5.jpg', 'https://kaspi.kz/image6.jpg'],
      name: 'Product 2',
      description: 'Description of product 2',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/product2'
    }
    // Добавьте еще 8 товаров
  ];

  changeImage(product: any, index: number) {
    [product.image[0], product.image[index]] = [product.image[index], product.image[0]];
  }

  getShareLink(platform: string, url: string): string {
    if (platform === 'whatsapp') {
      return `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
    } else if (platform === 'telegram') {
      return `https://t.me/share/url?url=${encodeURIComponent(url)}`;
    }
    return '';
  }
}

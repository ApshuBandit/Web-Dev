import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  selectedCategory = 'Все';
  categories = ['Часы', 'Музыка', 'Смартфоны', 'Компьютеры', 'Игрушки'];
  cart: any[] = [];

  products = [
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdc/hce/86182020055070.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h66/h6d/86182020120606.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h66/h6d/86182020120606.jpg?format=gallery-medium'
      ],
      name: 'Смарт-часы Garmin',
      categories: ['Часы', 'Смартфоны'], 
      description: 'Уникальные смарт-часы с множеством функций.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/product1'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/hf1/86197882290206.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h81/86197882355742.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h81/86197882355742.png?format=gallery-medium'
      ],
      name: 'DJ контроллер Native',
      categories: ['Музыка'],
      description: 'Идеальный выбор для профессиональных диджеев.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/native-instruments-traktor-x1-mk3-120073014/?c=353220100'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5c/h31/84497680334878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/had/84497680269342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/had/84497680269342.jpg?format=gallery-medium'
      ],
      name: 'Игровой компьютер',
      categories: ['Компьютеры', 'Игрушки'],
      description: 'Мощный ПК для современных игр.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/lineup-newcomponents2-chernyi-114538061/?c=353220100'
    },
    {
    images:[
      'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
    ],
    name: 'Iphone 13 ',
    categories: ['Смартфоны'],
    description: 'Iphone 13 128 GB',
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=353220100'
  }
  ];
  
  getFilteredProducts() {
    return this.products.filter(product => 
      this.selectedCategory === 'Все' || product.categories.includes(this.selectedCategory)
    );
  }

  changeImage(product: any, index: number) {
    [product.images[0], product.images[index]] = [product.images[index], product.images[0]];
  }

  getShareLink(platform: string, url: string): string {
    if (platform === 'whatsapp') {
      return `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
    } else if (platform === 'telegram') {
      return `https://t.me/share/url?url=${encodeURIComponent(url)}`;
    }
    return '';
  }

  addToCart(product: any) {
    this.cart.push(product);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }
}

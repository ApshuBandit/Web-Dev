import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <h1>Welcome to the Album Manager </h1>
      <p>Organize your albums, add photos, and enjoy a seamless experience!</p>
      
      <a routerLink="/albums" class="btn">Explore Albums</a>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 600px;
      margin: 100px auto;
      text-align: center;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      background: linear-gradient(135deg, #ff9a9e, #fad0c4);
      color: #fff;
      animation: fadeIn 1.5s ease-in-out;
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 20px;
    }

    .btn {
      display: inline-block;
      padding: 10px 20px;
      font-size: 1.2rem;
      color: #fff;
      background: #ff758c;
      border-radius: 8px;
      text-decoration: none;
      transition: 0.3s ease-in-out;
    }

    .btn:hover {
      background: #ff4b6e;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class HomeComponent {}

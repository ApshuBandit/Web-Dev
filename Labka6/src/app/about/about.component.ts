import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>About This Project</h1>
      <p>
        This is a simple Angular project that demonstrates working with albums and photos.
        You can create, edit, and delete albums, as well as add and view photos.
      </p>

      <h2>Features:</h2>
      <ul>
        <li>✅ CRUD operations for albums</li>
        <li>✅ Adding and viewing photos</li>
        <li>✅ Auto-saving album titles</li>
        <li>✅ Local storage persistence</li>
        <li>✅ Responsive and modern design</li>
      </ul>

      <h2>Technology Stack:</h2>
      <ul>
        <li>⚡ Angular 16+</li>
        <li>⚡ TypeScript</li>
        <li>⚡ JSONPlaceholder API</li>
        <li>⚡ LocalStorage for persistence</li>
      </ul>

      <h2>Author:</h2>
      <p>Developed by Ilham ✨</p>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      padding: 20px;
    }

    h1 {
      font-size: 2rem;
      color: #4CAF50;
    }

    h2 {
      margin-top: 20px;
      color: #333;
    }

    p {
      font-size: 1.1rem;
      color: #555;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      background: #f4f4f4;
      margin: 10px 0;
      padding: 10px;
      border-radius: 8px;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    li::before {
      content: "🔥";
      font-size: 1.3rem;
    }
  `]
})
export class AboutComponent {}

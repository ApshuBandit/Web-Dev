import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="container">
      <h1>Albums</h1>
      <input [(ngModel)]="newAlbumTitle" placeholder="New album title">
      <button (click)="addAlbum()">Add Album</button>

      <ul *ngIf="albums.length > 0; else noAlbums">
        <li *ngFor="let album of albums">
          <a [routerLink]="['/albums', album.id]">{{ album.title }}</a>
          <button (click)="deleteAlbum(album.id)">🗑</button>
        </li>
      </ul>

      <ng-template #noAlbums>
        <p>No albums yet. Create one!</p>
      </ng-template>
    </div>
  `,
  styles: [`
    h1 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 20px;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    input {
      width: 300px;
      padding: 10px;
      margin: 10px 0;
      border: 2px solid #ccc;
      border-radius: 8px;
      font-size: 1rem;
    }

    button {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 10px 20px;
      margin: 10px;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background-color: #45a049;
    }

    ul {
      list-style: none;
      padding: 0;
      margin-top: 20px;
      width: 100%;
      max-width: 400px;
    }

    li {
      background: #f9f9f9;
      padding: 15px;
      border-radius: 10px;
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.1rem;
    }
  `]
})
export class AlbumsComponent {
  albums: any[] = [];
  newAlbumTitle: string = '';

  addAlbum() {
    if (this.newAlbumTitle.trim() === '') return;

    const newAlbum = { id: Date.now(), title: this.newAlbumTitle };
    this.albums.push(newAlbum);
    this.newAlbumTitle = '';
    console.log('New album added:', newAlbum);
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter(album => album.id !== id);
    console.log(`Album ${id} deleted`);
  }
}

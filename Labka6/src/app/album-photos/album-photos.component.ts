import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>Photos</h1>
    <button (click)="goBack()">Return</button>
    <div class="photos">
      <img *ngFor="let photo of photos" [src]="photo.url" [alt]="photo.title">
    </div>
  `,
  styles: [`
    .photos {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .subscribe(data => this.photos = data);
  }

  goBack() {
    history.back();
  }
}

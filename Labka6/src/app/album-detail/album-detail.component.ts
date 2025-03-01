import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'] // Подключение CSS-файла
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  photos: any[] = [];
  newPhotoTitle: string = '';
  newPhotoUrl: string = '';
  selectedPhoto: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .subscribe(data => this.album = data);

    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .subscribe(data => this.photos = data);
  }

  save() {
    console.log('Album saved:', this.album);
  }

  goBack() {
    history.back();
  }

  addPhoto() {
    if (this.newPhotoTitle.trim() === '' || this.newPhotoUrl.trim() === '') return;

    const newPhoto = {
      id: Date.now(),
      title: this.newPhotoTitle,
      url: this.newPhotoUrl
    };
    this.photos.push(newPhoto);
    this.newPhotoTitle = '';
    this.newPhotoUrl = '';
    console.log('New photo added:', newPhoto);
  }

  openPhoto(url: string) {
    this.selectedPhoto = url;
  }
}

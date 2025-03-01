import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { AlbumDetailComponent } from './app/album-detail/album-detail.component';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./app/home/home.component').then(m => m.HomeComponent) },
      { path: 'about', loadComponent: () => import('./app/about/about.component').then(m => m.AboutComponent) },
      { path: 'albums', loadComponent: () => import('./app/albums/albums.component').then(m => m.AlbumsComponent) },
      { path: 'albums/:id', loadComponent: () => import('./app/album-detail/album-detail.component').then(m => m.AlbumDetailComponent) },
      { path: 'albums/:id/photos', loadComponent: () => import('./app/album-photos/album-photos.component').then(m => m.AlbumPhotosComponent) }
    ]),

    importProvidersFrom(HttpClientModule) 
  ]
});

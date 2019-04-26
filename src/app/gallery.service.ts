import { Injectable } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { GalleryItem } from './gallery-item';

@Injectable()
export class GalleryService {

  public galleryItems: GalleryItem[] = [
    {
      name: 'Address Query',
      description: 'Example on using a arcgis rest api query and observables to create a search box.',
      routerLink: '/address-query',
      thumbnail: 'assets/route-address-query-thumbnail.png',
      altText: 'Thumbnail image of the address query'
    },
    {
      name: 'Address Search',
      description: 'Example on using the search widget.',
      routerLink: '/address-search',
      thumbnail: 'assets/route-map-view-basic-thumbnail.png',
      altText: 'Thumbnail image of the address search map'
    },
    {
      name: 'Map View (Basic)',
      description: 'Example on using the map view component.',
      routerLink: '/map-view-basic',
      thumbnail: 'assets/route-map-view-basic-thumbnail.png',
      altText: 'Thumbnail image of the map view basic map'
    },
    {
      name: 'Scene View (Basic)',
      description: 'Example on using the scene view component.',
      routerLink: '/scene-view-basic',
      thumbnail: 'assets/route-scene-view-basic-thumbnail.png',
      altText: 'Thumbnail image of the scene view basic map'
    }
  ];

  constructor() {
  }

  getGalleryItems(): Observable<GalleryItem[]> {
    return of(this.galleryItems);
  }
}

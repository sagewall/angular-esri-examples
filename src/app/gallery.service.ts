import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { GalleryItem } from './gallery-item';

@Injectable()
export class GalleryService {

  public galleryItems: GalleryItem[] = [
    {
      name: 'Historic Places',
      description: 'Historic Places in Jefferson County Colorado.',
      routerLink: '/historic-places',
      thumbnail: 'assets/historic-places-thumbnail.png',
      altText: 'Thumbnail image of the historic places map'
    },
    {
      name: 'Map View (Basic)',
      description: 'Example on using the map view component.',
      routerLink: '/map-view-basic',
      thumbnail: 'assets/route-map-view-basic-thumbnail.png',
      altText: 'Thumbnail image of the map view basic map'
    }
  ];

  constructor() {
  }

  getGalleryItems(): Observable<GalleryItem[]> {
    return of(this.galleryItems);
  }
}

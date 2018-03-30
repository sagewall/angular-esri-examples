import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { GalleryItem } from './gallery-item';

@Injectable()
export class GalleryService {

  public galleryItems: GalleryItem[] = [
    {
      name: 'Historic Places',
      description: 'Historic Places in Jefferson County Colorado',
      routerLink: '/historic-places',
      thumbnail: 'assets/historic-places-thumbnail.png',
      altText: 'Thumbnail image of the historic places map'
    }
  ];

  constructor() {
  }

  getGalleryItems(): Observable<GalleryItem[]> {
    return of(this.galleryItems);
  }
}

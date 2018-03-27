import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { GalleryItem } from './gallery-item';

@Injectable()
export class GalleryService {

  public galleryItems: GalleryItem[] = [
    {name: 'Historic Places', description: 'Historic Places in Jefferson County Colorado'},
    {name: 'Test', description: 'Test Gallery Item'}
  ];

  constructor() {
  }

  getGalleryItems(): Observable<GalleryItem[]> {
    return of(this.galleryItems);
  }
}

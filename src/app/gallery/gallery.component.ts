import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { GalleryItem } from '../gallery-item';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  private _galleryItems: GalleryItem[];

  set galleryItems(galleryItems: GalleryItem[]) {
    this._galleryItems = galleryItems;
  }

  get galleryItems() {
    return this._galleryItems;
  }

  constructor(
    private galleryService: GalleryService
  ) {
  }

  ngOnInit() {
    this.galleryService
      .getGalleryItems()
      .subscribe(galleryItems => this.galleryItems = galleryItems);
  }

}

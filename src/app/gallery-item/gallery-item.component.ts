import { Component, Input, OnInit } from '@angular/core';
import { GalleryItem } from '../gallery-item';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.sass']
})
export class GalleryItemComponent implements OnInit {

  private _galleryItem: GalleryItem;

  @Input()
  set galleryItem(galleryItem: GalleryItem) {
    this._galleryItem = galleryItem;
  }

  get galleryItem(): GalleryItem {
    return this._galleryItem;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

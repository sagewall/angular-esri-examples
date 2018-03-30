import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GalleryItemComponent } from './gallery-item.component';
import { GalleryItem } from '../gallery-item';

describe('GalleryItemComponent', () => {
  let component: GalleryItemComponent;
  let fixture: ComponentFixture<GalleryItemComponent>;

  const galleryItem: GalleryItem = {
    name: 'Historic Places',
    description: 'Historic Places in Jefferson County Colorado',
    routerLink: '/historic-places',
    thumbnail: 'assets/historic-places-thumbnail.png',
    altText: 'Thumbnail image of the historic places map'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryItemComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryItemComponent);
    component = fixture.componentInstance;
    component.galleryItem = galleryItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

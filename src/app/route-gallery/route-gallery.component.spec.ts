import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GalleryService } from '../gallery.service';

import { RouteGalleryComponent } from './route-gallery.component';
import { GalleryItemComponent } from '../gallery-item/gallery-item.component';

describe('RouteGalleryComponent', () => {
  let component: RouteGalleryComponent;
  let fixture: ComponentFixture<RouteGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RouteGalleryComponent,
        GalleryItemComponent
      ],
      providers: [GalleryService],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

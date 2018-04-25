import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouteMapViewBasicComponent } from './route-map-view-basic.component';
import { MapViewComponent } from '../map-view/map-view.component';

describe('RouteMapViewBasicComponent', () => {
  let component: RouteMapViewBasicComponent;
  let fixture: ComponentFixture<RouteMapViewBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RouteMapViewBasicComponent,
        MapViewComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteMapViewBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

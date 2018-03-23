import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapViewComponent } from './map-view.component';

describe('MapViewComponent', () => {
  let component: MapViewComponent;
  let fixture: ComponentFixture<MapViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create MapView', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mapViewNode')).toBeDefined();
  });

  it('center has a default value', () => {
    expect(component.center).toEqual(jasmine.any(Array));
  });

  it('rotation has a default value', () => {
    expect(component.rotation).toBeGreaterThanOrEqual(0);
    expect(component.rotation).toBeLessThanOrEqual(360);
  });

  it('webmap portal id has a default value', () => {
    expect(component.webMapPortalId).toEqual(jasmine.any(String));
  });

  it('zoom has a default value', () => {
    expect(component.zoom).toBeGreaterThanOrEqual(0);
    expect(component.zoom).toBeLessThanOrEqual(24);
  });

  it('mapLoaded event fired', (done) => {
    component.mapLoaded.subscribe(g => {
      expect(g).toBeTruthy();
      done();
    });
  });
});

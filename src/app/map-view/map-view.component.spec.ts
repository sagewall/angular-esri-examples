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

  it('layer list position has a default value', () => {
    expect(component.layerListPosition).toEqual(jasmine.any(String));
  });

  it('show layer list has a default value', () => {
    expect(component.showLayerList).toEqual(jasmine.any(Boolean));
  });

  it('search position has a default value', () => {
    expect(component.searchPosition).toEqual(jasmine.any(String));
  });

  it('show search has a default value', () => {
    expect(component.showSearch).toEqual(jasmine.any(Boolean));
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

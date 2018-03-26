import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneViewComponent } from './scene-view.component';

describe('SceneViewComponent', () => {
  let component: SceneViewComponent;
  let fixture: ComponentFixture<SceneViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SceneViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create SceneView', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('sceneViewNode')).toBeDefined();
  });

  it('center has a default value', () => {
    expect(component.center).toEqual(jasmine.any(Array));
  });

  it('ground has a default value', () => {
    expect(component.ground).toEqual(jasmine.any(String));
  });

  it('heading has a default value', () => {
    expect(component.heading).toBeGreaterThanOrEqual(0);
    expect(component.heading).toBeLessThanOrEqual(360);
  });

  it('layer list position has a default value', () => {
    expect(component.layerListPosition).toEqual(jasmine.any(String));
  });


  it('tilt has a default value', () => {
    expect(component.tilt).toBeGreaterThanOrEqual(0);
    expect(component.tilt).toBeLessThanOrEqual(90);
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

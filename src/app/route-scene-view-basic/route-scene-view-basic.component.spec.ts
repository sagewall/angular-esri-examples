import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSceneViewBasicComponent } from './route-scene-view-basic.component';
import { SceneViewComponent } from '../scene-view/scene-view.component';

describe('RouteSceneViewBasicComponent', () => {
  let component: RouteSceneViewBasicComponent;
  let fixture: ComponentFixture<RouteSceneViewBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RouteSceneViewBasicComponent,
        SceneViewComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSceneViewBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricPlacesComponent } from './historic-places.component';
import { MapViewComponent } from '../map-view/map-view.component';
import { SceneViewComponent } from '../scene-view/scene-view.component';

describe('HistoricPlacesComponent', () => {
  let component: HistoricPlacesComponent;
  let fixture: ComponentFixture<HistoricPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HistoricPlacesComponent,
        MapViewComponent,
        SceneViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

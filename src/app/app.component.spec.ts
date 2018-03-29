import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HistoricPlacesComponent } from './historic-places/historic-places.component';
import { MapViewComponent } from './map-view/map-view.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SceneViewComponent } from './scene-view/scene-view.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        HistoricPlacesComponent,
        MapViewComponent,
        NavigationComponent,
        SceneViewComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});

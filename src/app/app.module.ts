import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { MapViewComponent } from './map-view/map-view.component';
import { SceneViewComponent } from './scene-view/scene-view.component';
import { HistoricPlacesComponent } from './historic-places/historic-places.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    SceneViewComponent,
    HistoricPlacesComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

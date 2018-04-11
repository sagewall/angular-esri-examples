import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { GalleryService } from './gallery.service';

import { AppComponent } from './app.component';
import { MapViewComponent } from './map-view/map-view.component';
import { SceneViewComponent } from './scene-view/scene-view.component';
import { HistoricPlacesComponent } from './historic-places/historic-places.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { RouteMapViewBasicComponent } from './route-map-view-basic/route-map-view-basic.component';


@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    SceneViewComponent,
    HistoricPlacesComponent,
    GalleryComponent,
    HeaderComponent,
    NavigationComponent,
    GalleryItemComponent,
    RouteMapViewBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

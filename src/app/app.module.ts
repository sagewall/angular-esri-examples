import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { GalleryService } from './gallery.service';

import { AppComponent } from './app.component';
import { MapViewComponent } from './map-view/map-view.component';
import { SceneViewComponent } from './scene-view/scene-view.component';
import { RouteGalleryComponent } from './route-gallery/route-gallery.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { RouteMapViewBasicComponent } from './route-map-view-basic/route-map-view-basic.component';
import { RouteSceneViewBasicComponent } from './route-scene-view-basic/route-scene-view-basic.component';


@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    SceneViewComponent,
    RouteGalleryComponent,
    HeaderComponent,
    NavigationComponent,
    GalleryItemComponent,
    RouteMapViewBasicComponent,
    RouteSceneViewBasicComponent
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

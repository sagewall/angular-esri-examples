import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MapViewComponent } from './map-view/map-view.component';
import { SceneViewComponent } from './scene-view/scene-view.component';


@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    SceneViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

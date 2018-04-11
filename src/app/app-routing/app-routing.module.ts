import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteGalleryComponent } from '../route-gallery/route-gallery.component';
import { RouteMapViewBasicComponent } from '../route-map-view-basic/route-map-view-basic.component';
import { RouteSceneViewBasicComponent } from '../route-scene-view-basic/route-scene-view-basic.component';

const appRoutes: Routes = [
  { path: 'route-gallery', component: RouteGalleryComponent},
  { path: 'map-view-basic', component: RouteMapViewBasicComponent },
  { path: 'scene-view-basic', component: RouteSceneViewBasicComponent },
  { path: '', redirectTo: '/route-gallery', pathMatch: 'full'},
  { path: '**', component: RouteGalleryComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

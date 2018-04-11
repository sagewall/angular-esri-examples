import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from '../gallery/gallery.component';
import { RouteMapViewBasicComponent } from '../route-map-view-basic/route-map-view-basic.component';

const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent},
  { path: 'map-view-basic', component: RouteMapViewBasicComponent },
  { path: '', redirectTo: '/gallery', pathMatch: 'full'},
  { path: '**', component: GalleryComponent}
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

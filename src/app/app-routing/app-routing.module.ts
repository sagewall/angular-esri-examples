import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAddressSearchComponent } from '../route-address-search/route-address-search.component';
import { RouteGalleryComponent } from '../route-gallery/route-gallery.component';
import { RouteMapViewBasicComponent } from '../route-map-view-basic/route-map-view-basic.component';
import { RouteSceneViewBasicComponent } from '../route-scene-view-basic/route-scene-view-basic.component';
import { RouteAddressQueryComponent } from '../route-address-query/route-address-query.component';

const appRoutes: Routes = [
  {path: 'address-query', component: RouteAddressQueryComponent},
  {path: 'address-search', component: RouteAddressSearchComponent},
  {path: 'gallery', component: RouteGalleryComponent},
  {path: 'map-view-basic', component: RouteMapViewBasicComponent},
  {path: 'scene-view-basic', component: RouteSceneViewBasicComponent},
  {path: '', redirectTo: '/gallery', pathMatch: 'full'},
  {path: '**', component: RouteGalleryComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

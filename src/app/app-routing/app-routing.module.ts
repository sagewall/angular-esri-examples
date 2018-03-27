import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoricPlacesComponent } from '../historic-places/historic-places.component';
import { GalleryComponent } from '../gallery/gallery.component';

const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent},
  { path: 'historic-places', component: HistoricPlacesComponent },
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

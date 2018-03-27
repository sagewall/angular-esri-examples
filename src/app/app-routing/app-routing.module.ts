import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoricPlacesComponent } from '../historic-places/historic-places.component';

const appRoutes: Routes = [
  { path: 'historic-places', component: HistoricPlacesComponent },
  { path: '', redirectTo: '/historic-places', pathMatch: 'full'},
  { path: '**', component: HistoricPlacesComponent}
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

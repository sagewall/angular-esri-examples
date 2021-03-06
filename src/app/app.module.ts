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
import { RouteAddressSearchComponent } from './route-address-search/route-address-search.component';
import { AddressSearchComponent } from './address-search/address-search.component';
import { AddressQueryComponent } from './address-query/address-query.component';
import { AddressService } from './address.service';
import { HttpClientModule } from '@angular/common/http';
import { RouteAddressQueryComponent } from './route-address-query/route-address-query.component';
import { AddressQueryResultListComponent } from './address-query-result-list/address-query-result-list.component';
import { AddressQueryResultComponent } from './address-query-result/address-query-result.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import { AddressAttributesComponent } from './address-attributes/address-attributes.component';
import { AddressSelectionService } from './address-selection.service';
import { RouteAddressDetailComponent } from './route-address-detail/route-address-detail.component';


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
    RouteSceneViewBasicComponent,
    RouteAddressSearchComponent,
    AddressSearchComponent,
    AddressQueryComponent,
    RouteAddressQueryComponent,
    AddressQueryResultListComponent,
    AddressQueryResultComponent,
    AddressDetailComponent,
    AddressAttributesComponent,
    RouteAddressDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AddressService,
    AddressSelectionService,
    GalleryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

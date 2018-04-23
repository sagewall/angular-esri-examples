import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;

import { Address } from '../address';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.sass']
})
export class AddressSearchComponent implements OnInit {

  private _address: Address;
  private _center = [-105.201161, 39.727976];
  private _mapView: esri.MapView;
  private _mapViewProperties: esri.MapViewProperties;
  private _search: esri.Search;
  private _searchProperties: esri.SearchProperties;
  private _searchSources: esri.FeatureLayerSource[];
  private _webMap: esri.WebMap;
  private _webMapPortalId = '464d489525914296a95fb476251e416e';
  private _webMapProperties: esri.WebMapProperties;

  set address(address: Address) {
    this._address = address;
  }

  get address() {
    return this._address;
  }

  set center(center: number[]) {
    this._center = center;
  }

  get center() {
    return this._center;
  }

  set mapView(mapView: esri.MapView) {
    this._mapView = mapView;
  }

  get mapView() {
    return this._mapView;
  }

  set mapViewProperties(mapViewProperties: esri.MapViewProperties) {
    this._mapViewProperties = mapViewProperties;
  }

  get mapViewProperties() {
    return this._mapViewProperties;
  }

  set search(search: esri.Search) {
    this._search = search;
  }

  get search() {
    return this._search;
  }

  set searchProperties(searchProperties: esri.SearchProperties) {
    this._searchProperties = searchProperties;
  }

  get searchProperties() {
    return this._searchProperties;
  }

  set searchSources(searchSources: esri.FeatureLayerSource[]) {
    this._searchSources = searchSources;
  }

  get searchSources() {
    return this._searchSources;
  }

  set webMap(webMap: esri.WebMap) {
    this._webMap = webMap;
  }

  get webMap() {
    return this._webMap;
  }

  get webMapPortalId() {
    return this._webMapPortalId;
  }

  set webMapProperties(webMapProperties: esri.WebMapProperties) {
    this._webMapProperties = webMapProperties;
  }

  get webMapProperties() {
    return this._webMapProperties;
  }

  @ViewChild('mapViewContainer')
  private mapViewContainer: ElementRef;

  constructor() {
  }

  ngOnInit() {
    const options = {
      url: 'https://js.arcgis.com/4.7/'
    };
    loadModules([
      'esri/layers/FeatureLayer',
      'esri/widgets/LayerList',
      'esri/widgets/Popup',
      'esri/widgets/Search',
      'esri/WebMap',
      'esri/views/MapView'
    ], options)
      .then(([
               FeatureLayer,
               LayerList,
               Popup,
               Search,
               WebMap,
               MapView]) => {
        this.webMapProperties = {
          portalItem: {
            id: this.webMapPortalId
          }
        };

        this.webMap = new WebMap(this.webMapProperties);

        this.mapViewProperties = {
          container: this.mapViewContainer.nativeElement,
          center: this.center,
          map: this.webMap
        };
        this.mapView = new MapView(this.mapViewProperties);

        this.searchSources = [
          {
            featureLayer: new FeatureLayer({
              url: 'https://mapservices2.jeffco.us/arcgis/rest/services/jMap/Address/MapServer/0'
            }),
            searchFields: ['ADRHSNO'],
            displayField: 'ADDRESS',
            exactMatch: true,
            outFields: ['*'],
            name: 'Address Search',
            placeholder: 'Address Search',
            maxResults: 1,
            maxSuggestions: 100,
            suggestionsEnabled: true,
            minSuggestCharacters: 2,
            popup: null,
            filter: null,
            prefix: '',
            resultSymbol: null,
            suffix: '',
            suggestionTemplate: '{ADDRESS}',
            withinViewEnabled: false,
            zoomScale: null
          }
        ];

        this.searchProperties = {
          view: this.mapView,
          maxResults: 1,
          maxSuggestions: 100,
          popupEnabled: false,
          sources: this.searchSources
        };

        this.search = new Search(this.searchProperties);

        this.mapView.ui.add(this.search, {
          index: 0,
          position: 'top-right'
        });

        this.search.on('search-complete', (event) => {
          this.address = event.results[0].results[0].feature.attributes;
        });

      })
      .catch(err => {
        console.error(err);
      });
  }
}

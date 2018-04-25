import { Component, Input, OnInit, OnChanges, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Address } from '../address';
import { loadModules } from 'esri-loader';
import esri = __esri;

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.sass']
})
export class MapViewComponent implements OnInit, OnChanges {

  private _esriLoaderOptions: object = {};
  private _feature: esri.Graphic | Address;
  private _center: esri.Point;
  private _layerList: esri.LayerList;
  private _layerListPosition = 'top-right';
  private _layerListProperties: esri.LayerListProperties;
  private _mapView: esri.MapView;
  private _mapViewProperties: esri.MapViewProperties;
  private _rotation = 0;
  private _search: esri.Search;
  private _searchPosition = 'top-left';
  private _searchProperties: esri.SearchProperties;
  private _showCenterMarker = false;
  private _showLayerList = true;
  private _showSearch = true;
  private _spatialReferenceProperties: esri.SpatialReferenceProperties;
  private _spatialReference: esri.SpatialReference;
  private _webMap: esri.WebMap;
  private _webMapPortalId = '7ebde07ed9b945d9be8c70aeced18b96';
  private _webMapProperties: esri.WebMapProperties;
  private _zoom = 12;

  set esriLoaderOptions(esriLoaderOptions: object) {
    this._esriLoaderOptions = esriLoaderOptions;
  }

  get esriLoaderOptions(): object {
    return this._esriLoaderOptions;
  }

  @Input()
  set feature(feature: esri.Graphic | Address) {
    this._feature = feature;
  }

  get feature(): esri.Graphic | Address {
    return this._feature;
  }

  set center(center: esri.Point) {
    this._center = center;
  }

  get center(): esri.Point {
    return this._center;
  }

  set layerList(layerList: esri.LayerList) {
    this._layerList = layerList;
  }

  get layerList(): esri.LayerList {
    return this._layerList;
  }

  @Input()
  set layerListPosition(layerListPosition: string) {
    this._layerListPosition = layerListPosition;
  }

  get layerListPosition(): string {
    return this._layerListPosition;
  }

  set layerListProperties(layerListProperties: esri.LayerListProperties) {
    this._layerListProperties = layerListProperties;
  }

  get layerListProperties(): esri.LayerListProperties {
    return this._layerListProperties;
  }

  set mapView(mapView: esri.MapView) {
    this._mapView = mapView;
  }

  get mapView(): esri.MapView {
    return this._mapView;
  }

  set mapViewProperties(mapViewProperties: esri.MapViewProperties) {
    this._mapViewProperties = mapViewProperties;
  }

  get mapViewProperties(): esri.MapViewProperties {
    return this._mapViewProperties;
  }

  @Input()
  set rotation(rotation: number) {
    this._rotation = rotation;
  }

  get rotation(): number {
    return this._rotation;
  }

  set search(search: esri.Search) {
    this._search = search;
  }

  get search(): esri.Search {
    return this._search;
  }

  @Input()
  set searchPosition(searchPosition: string) {
    this._searchPosition = searchPosition;
  }

  get searchPosition(): string {
    return this._searchPosition;
  }

  set searchProperties(searchProperties: esri.SearchProperties) {
    this._searchProperties = searchProperties;
  }

  get searchProperties(): esri.SearchProperties {
    return this._searchProperties;
  }

  @Input()
  set showCenterMarker(showCenterMarker: boolean) {
    this._showCenterMarker = showCenterMarker;
  }

  get showCenterMarker(): boolean {
    return this._showCenterMarker;
  }

  @Input()
  set showLayerList(showLayerList: boolean) {
    this._showLayerList = showLayerList;
  }

  get showLayerList(): boolean {
    return this._showLayerList;
  }

  @Input()
  set showSearch(showSearch: boolean) {
    this._showSearch = showSearch;
  }

  get showSearch(): boolean {
    return this._showSearch;
  }

  set spatialReferenceProperties(spatialReferenceProperties: esri.SpatialReferenceProperties) {
    this._spatialReferenceProperties = spatialReferenceProperties;
  }

  get spatialReferenceProperties(): esri.SpatialReferenceProperties {
    return this._spatialReferenceProperties;
  }

  set spatialReference(spatialReference: esri.SpatialReference) {
    this._spatialReference = spatialReference;
  }

  get spatialReference(): esri.SpatialReference {
    return this._spatialReference;
  }

  set webMap(webMap: esri.WebMap) {
    this._webMap = webMap;
  }

  get webMap(): esri.WebMap {
    return this._webMap;
  }

  @Input()
  set webMapPortalId(webMapPortalId: string) {
    this._webMapPortalId = webMapPortalId;
  }

  get webMapPortalId(): string {
    return this._webMapPortalId;
  }

  set webMapProperties(webMapProperties: esri.WebMapProperties) {
    this._webMapProperties = webMapProperties;
  }

  get webMapProperties(): esri.WebMapProperties {
    return this._webMapProperties;
  }

  @Input()
  set zoom(zoom: number) {
    this._zoom = zoom;
  }

  get zoom(): number {
    return this._zoom;
  }

  @Output() mapLoaded = new EventEmitter<boolean>();

  @ViewChild('mapViewNode')
  private mapViewNodeElementRef: ElementRef;

  constructor() {
    this.esriLoaderOptions = {
      url: 'https://js.arcgis.com/4.7/'
    };
    loadModules([
      'esri/WebMap',
      'esri/geometry/Point',
      'esri/geometry/SpatialReference',
    ], this.esriLoaderOptions)
      .then(([
               WebMap,
               Point,
               SpatialReference
             ]) => {
        this.webMapProperties = {
          portalItem: {
            id: this.webMapPortalId
          }
        };

        this.webMap = new WebMap(this.webMapProperties);

        this.spatialReferenceProperties = {
          wkid: 3857
        };
        this.spatialReference = new SpatialReference(this.spatialReferenceProperties);


        if (this.feature) {
          const pointProperties: esri.PointProperties = {
            x: this.feature.geometry['x'],
            y: this.feature.geometry['y'],
            spatialReference: this.spatialReference
          };
          this.center = new Point(pointProperties);
        } else {
          const pointProperties: esri.PointProperties = {
            x: -11717239,
            y: 4824445,
            spatialReference: this.spatialReference
          };
          this.center = new Point(pointProperties);
        }
      });
  }

  ngOnInit() {
    this.createMapView();
  }

  ngOnChanges() {
    this.createMapView();
  }

  createMapView() {

    loadModules([
      'esri/Graphic',
      'esri/WebMap',
      'esri/geometry/Point',
      'esri/geometry/SpatialReference',
      'esri/layers/GraphicsLayer',
      'esri/symbols/SimpleMarkerSymbol',
      'esri/views/MapView',
      'esri/widgets/LayerList',
      'esri/widgets/Search'

    ], this.esriLoaderOptions)
      .then(([
               Graphic,
               WebMap,
               Point,
               SpatialReference,
               GraphicsLayer,
               SimpleMarkerSymbol,
               MapView,
               LayerList,
               Search
             ]) => {
        if (this.feature) {
          const pointProperties: esri.PointProperties = {
            x: this.feature.geometry['x'],
            y: this.feature.geometry['y'],
            spatialReference: this.spatialReference
          };
          this.center = new Point(pointProperties);
        }

        this.mapViewProperties = {
          container: this.mapViewNodeElementRef.nativeElement,
          center: this.center,
          rotation: this.rotation,
          zoom: this.zoom,
          map: this.webMap
        };

        this.mapView = new MapView(this.mapViewProperties);

        if (this.showCenterMarker) {
          const simpleMarkerSymbolProperties: esri.SimpleMarkerSymbolProperties = {
            style: 'circle',
            color: [255, 255, 255, 0],
            size: '12px',
            outline: {
              color: [255, 255, 255],
              width: 1
            }
          };
          const simpleMarkerSymbol: esri.SimpleMarkerSymbol = new SimpleMarkerSymbol(simpleMarkerSymbolProperties);

          const graphicProperties: esri.GraphicProperties = {
            geometry: this.center,
            symbol: simpleMarkerSymbol
          };
          const graphic: esri.Graphic = new Graphic(graphicProperties);

          const graphicsLayerProperties: esri.GraphicsLayerProperties = {
            graphics: [graphic]
          };
          const graphicsLayer: esri.GraphicsLayer = new GraphicsLayer(graphicsLayerProperties);

          this.mapView.map.add(graphicsLayer);
        }

        if (this.showLayerList) {
          this.layerListProperties = {
            view: this.mapView
          };

          this.layerList = new LayerList(this.layerListProperties);

          this.mapView.ui.add(this.layerList, {
            index: 1,
            position: this.layerListPosition
          });
        }

        if (this.showSearch) {
          this.searchProperties = {
            view: this.mapView
          };

          this.search = new Search(this.searchProperties);

          this.mapView.ui.add(this.search, {
            index: 0,
            position: this.searchPosition
          });
        }

        this.mapView.when(() => {
          // All the resources in the MapView and the map have loaded. Now execute additional processes
          this.mapLoaded.emit(true);
        }, err => {
          console.error(err);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
}

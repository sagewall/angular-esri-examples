import { Component, Input, OnInit, OnChanges, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.sass']
})
export class MapViewComponent implements OnInit, OnChanges {

  private _center = [-105.25, 39.75];
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
  private _webMap: esri.WebMap;
  private _webMapPortalId = '7ebde07ed9b945d9be8c70aeced18b96';
  private _webMapProperties: esri.WebMapProperties;
  private _zoom = 12;

  @Input()
  set center(center: number[]) {
    this._center = center;
  }

  get center() {
    return this._center;
  }

  set layerList(layerList: esri.LayerList) {
    this._layerList = layerList;
  }

  get layerList() {
    return this._layerList;
  }

  @Input()
  set layerListPosition(layerListPosition: string) {
    this._layerListPosition = layerListPosition;
  }

  get layerListPosition() {
    return this._layerListPosition;
  }

  set layerListProperties(layerListProperties: esri.LayerListProperties) {
    this._layerListProperties = layerListProperties;
  }

  get layerListProperties() {
    return this._layerListProperties;
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

  @Input()
  set rotation(rotation: number) {
    this._rotation = rotation;
  }

  get rotation() {
    return this._rotation;
  }

  set search(search: esri.Search) {
    this._search = search;
  }

  get search() {
    return this._search;
  }

  @Input()
  set searchPosition(searchPosition: string) {
    this._searchPosition = searchPosition;
  }

  get searchPosition() {
    return this._searchPosition;
  }

  set searchProperties(searchProperties: esri.SearchProperties) {
    this._searchProperties = searchProperties;
  }

  get searchProperties() {
    return this._searchProperties;
  }

  @Input()
  set showCenterMarker(showCenterMarker: boolean) {
    this._showCenterMarker = showCenterMarker;
  }

  get showCenterMarker() {
    return this._showCenterMarker;
  }

  @Input()
  set showLayerList(showLayerList: boolean) {
    this._showLayerList = showLayerList;
  }

  get showLayerList() {
    return this._showLayerList;
  }

  @Input()
  set showSearch(showSearch: boolean) {
    this._showSearch = showSearch;
  }

  get showSearch() {
    return this._showSearch;
  }

  set webMap(webMap: esri.WebMap) {
    this._webMap = webMap;
  }

  get webMap() {
    return this._webMap;
  }

  @Input()
  set webMapPortalId(webMapPortalId: string) {
    this._webMapPortalId = webMapPortalId;
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

  @Input()
  set zoom(zoom: number) {
    this._zoom = zoom;
  }

  get zoom() {
    return this._zoom;
  }

  @Output() mapLoaded = new EventEmitter<boolean>();

  @ViewChild('mapViewNode')
  private mapViewNodeElementRef: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.createMapView();
  }

  ngOnChanges() {
    this.createMapView();
  }

  createMapView() {
    const options = {
      url: 'https://js.arcgis.com/4.7/'
    };
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

    ], options)
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
        this.webMapProperties = {
          portalItem: {
            id: this.webMapPortalId
          }
        };

        this.webMap = new WebMap(this.webMapProperties);

        this.mapViewProperties = {
          container: this.mapViewNodeElementRef.nativeElement,
          center: this.center,
          rotation: this.rotation,
          zoom: this.zoom,
          map: this.webMap
        };
        this.mapView = new MapView(this.mapViewProperties);

        if (this.showCenterMarker) {
          const spatialReferenceProperties: esri.SpatialReferenceProperties = {
            wkid: 4326
          };
          const spatialReference: esri.SpatialReference = new SpatialReference(spatialReferenceProperties);

          const pointProperties: esri.PointProperties = {
            longitude: this.center[0],
            latitude: this.center[1],
            spatialReference: spatialReference
          };
          const point: esri.Point = new Point(pointProperties);

          const simpleMarkerSymbolProperties: esri.SimpleMarkerSymbolProperties = {
            style: 'circle',
            color: [255, 255, 255, 0],
            size: '10px',
            outline: {
              color: [255, 255, 255],
              width: 1
            }
          };
          const simpleMarkerSymbol: esri.SimpleMarkerSymbol = new SimpleMarkerSymbol(simpleMarkerSymbolProperties);

          const graphicProperties: esri.GraphicProperties = {
            geometry: point,
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

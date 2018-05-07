import { Component, Input, OnInit, OnChanges, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
import { Address } from '../address';

@Component({
  selector: 'app-scene-view',
  templateUrl: './scene-view.component.html',
  styleUrls: ['./scene-view.component.sass']
})
export class SceneViewComponent implements OnInit, OnChanges {

  private _center: esri.Point;
  private _esriLoaderOptions: object = {};
  private _feature: esri.Graphic | Address;
  private _ground = 'world-elevation';
  private _heading = 0;
  private _layerList: esri.LayerList;
  private _layerListPosition = 'top-right';
  private _layerListProperties: esri.LayerListProperties;
  private _sceneView: esri.SceneView;
  private _sceneViewProperties: esri.SceneViewProperties;
  private _search: esri.widgetsSearch;
  private _searchPosition = 'top-left';
  private _searchProperties: esri.widgetsSearchProperties;
  private _showCenterMarker = false;
  private _showLayerList = false;
  private _showSearch = true;
  private _spatialReferenceProperties: esri.SpatialReferenceProperties;
  private _spatialReference: esri.SpatialReference;
  private _tilt = 45;
  private _webMap: esri.WebMap;
  private _webMapPortalId = '55ebf90799fa4a3fa57562700a68c405';
  private _webMapProperties: esri.WebMapProperties;
  private _zoom = 12;

  set center(center: esri.Point) {
    this._center = center;
  }

  get center(): esri.Point {
    return this._center;
  }

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

  @Input()
  set ground(ground: string) {
    this._ground = ground;
  }

  get ground(): string {
    return this._ground;
  }

  @Input()
  set heading(heading: number) {
    this._heading = heading;
  }

  get heading(): number {
    return this._heading;
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

  set sceneView(sceneView: esri.SceneView) {
    this._sceneView = sceneView;
  }

  get sceneView(): esri.SceneView {
    return this._sceneView;
  }

  set sceneViewProperties(sceneViewProperties: esri.SceneViewProperties) {
    this._sceneViewProperties = sceneViewProperties;
  }

  get sceneViewProperties(): esri.SceneViewProperties {
    return this._sceneViewProperties;
  }

  set search(search: esri.widgetsSearch) {
    this._search = search;
  }

  get search(): esri.widgetsSearch {
    return this._search;
  }

  @Input()
  set searchPosition(searchPosition: string) {
    this._searchPosition = searchPosition;
  }

  get searchPosition(): string {
    return this._searchPosition;
  }

  set searchProperties(searchProperties: esri.widgetsSearchProperties) {
    this._searchProperties = searchProperties;
  }

  get searchProperties(): esri.widgetsSearchProperties {
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

  @Input()
  set tilt(tilt: number) {
    this._tilt = tilt;
  }

  get tilt(): number {
    return this._tilt;
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

  @Output() sceneLoaded = new EventEmitter<boolean>();

  @ViewChild('sceneViewNode')
  private sceneViewNodeElementRef: ElementRef;

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
          },
          ground: 'world-elevation'
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
    this.createSceneView();
  }

  ngOnChanges() {
    this.createSceneView();
  }

  createSceneView() {
    const options = {
      url: 'https://js.arcgis.com/4.7/'
    };
    loadModules([
      'esri/Graphic',
      'esri/WebMap',
      'esri/geometry/Point',
      'esri/views/SceneView',
      'esri/layers/GraphicsLayer',
      'esri/symbols/SimpleMarkerSymbol',
      'esri/widgets/LayerList',
      'esri/widgets/Search'
    ], options)
      .then(([
               Graphic,
               WebMap,
               Point,
               SceneView,
               GraphicsLayer,
               SimpleMarkerSymbol,
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

        this.sceneViewProperties = {
          container: this.sceneViewNodeElementRef.nativeElement,
          center: this.center,
          zoom: this.zoom,
          map: this.webMap
        };
        this.sceneView = new SceneView(this.sceneViewProperties);

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
            title: 'Target',
            graphics: [graphic]
          };
          const graphicsLayer: esri.GraphicsLayer = new GraphicsLayer(graphicsLayerProperties);

          const targetLayer: esri.Layer = this.sceneView.map.allLayers.find(layer => layer.title === 'Target');
          this.sceneView.map.remove(targetLayer);
          this.sceneView.map.add(graphicsLayer);
        }

        if (this.showLayerList) {
          this.layerListProperties = {
            view: this.sceneView
          };

          this.layerList = new LayerList(this.layerListProperties);

          this.sceneView.ui.add(this.layerList, {
            index: 1,
            position: this.layerListPosition
          });
        }

        if (this.showSearch) {
          this.searchProperties = {
            view: this.sceneView
          };

          this.search = new Search(this.searchProperties);

          this.sceneView.ui.add(this.search, {
            index: 0,
            position: this.searchPosition
          });
        }

        this.sceneView.when(() => {
          // All the resources in the MapView and the map have loaded. Now execute additional processes
          this.sceneLoaded.emit(true);
          this.sceneView.goTo({
            heading: this.heading,
            tilt: this.tilt
          });
        }, err => {
          console.error(err);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

}

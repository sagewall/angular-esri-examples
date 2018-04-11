import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;

@Component({
  selector: 'app-scene-view',
  templateUrl: './scene-view.component.html',
  styleUrls: ['./scene-view.component.sass']
})
export class SceneViewComponent implements OnInit {

  private _center = [-105.25, 39.75];
  private _ground = 'world-elevation';
  private _heading = 0;
  private _layerList: esri.LayerList;
  private _layerListPosition = 'top-right';
  private _layerListProperties: esri.LayerListProperties;
  private _sceneView: esri.SceneView;
  private _sceneViewProperties: esri.SceneViewProperties;
  private _search: esri.Search;
  private _searchPosition = 'top-left';
  private _searchProperties: esri.SearchProperties;
  private _showLayerList = true;
  private _showSearch = true;
  private _tilt = 45;
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

  @Input()
  set ground(ground: string) {
    this._ground = ground;
  }

  get ground() {
    return this._ground;
  }

  @Input()
  set heading(heading: number) {
    this._heading = heading;
  }

  get heading() {
    return this._heading;
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

  set sceneView(sceneView: esri.SceneView) {
    this._sceneView = sceneView;
  }

  get sceneView() {
    return this._sceneView;
  }

  set sceneViewProperties(sceneViewProperties: esri.SceneViewProperties) {
    this._sceneViewProperties = sceneViewProperties;
  }

  get sceneViewProperties() {
    return this._sceneViewProperties;
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

  @Input()
  set tilt(tilt: number) {
    this._tilt = tilt;
  }

  get tilt() {
    return this._tilt;
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

  @ViewChild('sceneViewNode')
  private sceneViewNodeElementRef: ElementRef;

  constructor() {
  }

  ngOnInit() {
    loadModules([
      'esri/widgets/LayerList',
      'esri/widgets/Search',
      'esri/WebMap',
      'esri/views/SceneView'
    ])
      .then(([
               LayerList,
               Search,
               WebMap,
               SceneView]) => {
        this.webMapProperties = {
          portalItem: {
            id: this.webMapPortalId
          },
          ground: this.ground
        };

        this.webMap = new WebMap(this.webMapProperties);

        this.sceneViewProperties = {
          container: this.sceneViewNodeElementRef.nativeElement,
          center: this.center,
          zoom: this.zoom,
          map: this.webMap
        };
        this.sceneView = new SceneView(this.sceneViewProperties);

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
          this.mapLoaded.emit(true);
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

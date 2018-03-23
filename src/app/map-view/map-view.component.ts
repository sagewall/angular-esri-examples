import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.sass']
})
export class MapViewComponent implements OnInit {

  private _center = [-105.25, 39.75];
  private _mapView: esri.MapView;
  private _rotation = 0;
  private _webMap: esri.WebMap;
  private _webMapPortalId = 'c80397f52b0c48ab86c9768d08e8be69';
  private _zoom = 12;

  @Input()
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

  @Input()
  set rotation(rotation: number) {
    this._rotation = rotation;
  }

  get rotation() {
    return this._rotation;
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
    loadModules([
      'esri/WebMap',
      'esri/views/MapView'
    ])
      .then(([WebMap, MapView]) => {
        const webMapProperties: esri.WebMapProperties = {
          portalItem: {
            id: this.webMapPortalId
          }
        };

        this.webMap = new WebMap(webMapProperties);

        const mapViewProperties: esri.MapViewProperties = {
          container: this.mapViewNodeElementRef.nativeElement,
          center: this.center,
          rotation: this.rotation,
          zoom: this.zoom,
          map: this.webMap
        };
        this.mapView = new MapView(mapViewProperties);

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

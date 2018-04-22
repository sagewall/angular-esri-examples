import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import esri = __esri;

@Injectable()
export class AddressService {

  private _queryHouseNumberUrl = 'https://mapservices2.jeffco.us/arcgis/rest/services/jMap/Address/MapServer/0/query?' +
    'Outfields=*&f=json&orderByFields=ADDRESS&where=ADRHSNO=';

  get queryHouseNumberUrl() {
    return this._queryHouseNumberUrl;
  }

  constructor(private http: HttpClient) {
  }

  queryHouseNumber(houseNumber: string): Observable<esri.FeatureSet> {
    if (!houseNumber.trim()) {
      return this.http.get<esri.FeatureSet>(this.queryHouseNumberUrl + encodeURIComponent('0'));
    }
    return this.http.get<esri.FeatureSet>(this.queryHouseNumberUrl + encodeURIComponent(houseNumber));
  }

}

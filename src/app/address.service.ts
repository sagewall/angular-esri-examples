import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import esri = __esri;

@Injectable()
export class AddressService {

  private _serviceUrl = 'https://mapservices2.jeffco.us/arcgis/rest/services/jMap/Address/MapServer/0/query';

  get serviceUrl() {
    return this._serviceUrl;
  }

  constructor(private http: HttpClient) {
  }

  query(where: string, outFields: string, f: string, orderByFields?: string) {
    let url = `${this.serviceUrl}/query?where=${encodeURIComponent(where)}&outFields=${encodeURIComponent(outFields)}
                                          &f=${encodeURIComponent(f)}`;
    if (orderByFields) {
      url += `&orderByFields=${orderByFields}`;
    }
    return this.http.get<esri.FeatureSet>(url);
  }
}

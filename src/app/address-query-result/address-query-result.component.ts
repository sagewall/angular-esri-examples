import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../address';
import esri = __esri;

@Component({
  selector: 'app-address-query-result',
  templateUrl: './address-query-result.component.html',
  styleUrls: ['./address-query-result.component.sass']
})
export class AddressQueryResultComponent implements OnInit {

  private _feature: esri.Graphic | Address;

  @Input()
  set feature(feature: esri.Graphic | Address) {
    this._feature = feature;
  }

  get feature(): esri.Graphic | Address {
    return this._feature;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

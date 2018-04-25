import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../address';
import esri = __esri;

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.sass']
})
export class AddressDetailComponent implements OnInit {

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

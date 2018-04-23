import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Address } from '../address';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.sass']
})
export class AddressDetailComponent implements OnInit, OnChanges {

  private _address: Address;
  private _center = [-104.25, 39.75];

  @Input()
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

  constructor() {
  }

  ngOnInit() {
    this.center = [-this.address.ADR_LONGITUDE, this.address.ADR_LATITUDE];
  }

  ngOnChanges() {
    this.center = [-this.address.ADR_LONGITUDE, this.address.ADR_LATITUDE];
  }

}

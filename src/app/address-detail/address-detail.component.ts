import { Component, OnInit, Input } from '@angular/core';

import { Address } from '../address';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.sass']
})
export class AddressDetailComponent implements OnInit {

  private _address: Address;

  @Input()
  set address(address: Address) {
    this._address = address;
  }

  get address() {
    return this._address;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

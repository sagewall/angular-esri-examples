import { Component, OnInit, Input } from '@angular/core';

import { Address } from '../address';

@Component({
  selector: 'app-address-query-result',
  templateUrl: './address-query-result.component.html',
  styleUrls: ['./address-query-result.component.sass']
})
export class AddressQueryResultComponent implements OnInit {

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

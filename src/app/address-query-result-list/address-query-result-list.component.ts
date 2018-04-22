import { Component, OnInit, Input } from '@angular/core';

import { Address } from '../address';

@Component({
  selector: 'app-address-query-result-list',
  templateUrl: './address-query-result-list.component.html',
  styleUrls: ['./address-query-result-list.component.sass']
})
export class AddressQueryResultListComponent implements OnInit {

  private _addresses: Address[] = [];

  @Input()
  set addresses(addresses: Address[]) {
    this._addresses = addresses;
  }

  get addresses() {
    return this._addresses;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

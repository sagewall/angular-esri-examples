import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Address } from '../address';

@Component({
  selector: 'app-address-query-result-list',
  templateUrl: './address-query-result-list.component.html',
  styleUrls: ['./address-query-result-list.component.sass']
})
export class AddressQueryResultListComponent implements OnInit {


  private _addresses: Address[] = [];
  private _selectedAddress: Address;
  private _selectedItem: number;

  @Input()
  set addresses(addresses: Address[]) {
    this._addresses = addresses;
  }

  get addresses() {
    return this._addresses;
  }

  set selectedAddress(address: Address) {
    this._selectedAddress = address;
  }

  get selectedAddress() {
    return this._selectedAddress;
  }

  set selectedItem(selectedRow: number) {
    this._selectedItem = selectedRow;
  }

  get selectedItem() {
    return this._selectedItem;
  }

  @Output() selectedAddressEventEmitter = new EventEmitter<Address>();

  constructor() {
  }

  ngOnInit() {
  }

  selectAddress(address: Address, index: number) {
    this.selectedAddress = address;
    this.selectedAddressEventEmitter.emit(this.selectedAddress);
    this.selectedItem = index;
  }

}

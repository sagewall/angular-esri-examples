import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../address';
import esri = __esri;

@Component({
  selector: 'app-address-query-result-list',
  templateUrl: './address-query-result-list.component.html',
  styleUrls: ['./address-query-result-list.component.sass']
})
export class AddressQueryResultListComponent implements OnInit {

  private _features: esri.Graphic[] | Address[];
  private _selectedFeature: esri.Graphic | Address;
  private _selectedItem: number;

  @Input()
  set features(addresses: esri.Graphic[] | Address[]) {
    this._features = addresses;
  }

  get features(): esri.Graphic[] | Address[] {
    return this._features;
  }

  set selectedFeature(address: esri.Graphic | Address) {
    this._selectedFeature = address;
  }

  get selectedFeature(): esri.Graphic | Address {
    return this._selectedFeature;
  }

  set selectedItem(selectedRow: number) {
    this._selectedItem = selectedRow;
  }

  get selectedItem(): number {
    return this._selectedItem;
  }

  @Output() selectedFeatureEventEmitter = new EventEmitter<Address>();

  constructor() {
  }

  ngOnInit() {
  }

  selectFeature(feature: Address, index: number) {
    this.selectedFeature = feature;
    this.selectedFeatureEventEmitter.emit(this.selectedFeature);
    this.selectedItem = index;
  }

}

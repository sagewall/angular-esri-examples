import { Injectable } from '@angular/core';
import { Address } from './address';
import esri = __esri;

@Injectable()
export class AddressSelectionService {

  private _selectedFeature: esri.Graphic | Address;
  private _selectedIndex: number;

  set selectedFeature(address: esri.Graphic | Address) {
    this._selectedFeature = address;
  }

  get selectedFeature(): esri.Graphic | Address {
    return this._selectedFeature;
  }

  set selectedIndex(selectedRow: number) {
    this._selectedIndex = selectedRow;
  }

  get selectedIndex(): number {
    return this._selectedIndex;
  }

  constructor() {
  }

  clearSelection() {
    this.selectedFeature = null;
    this.selectedIndex = null;
  }

}

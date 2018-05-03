import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../address';
import { AddressSelectionService } from '../address-selection.service';
import esri = __esri;

@Component({
  selector: 'app-address-query-result-list',
  templateUrl: './address-query-result-list.component.html',
  styleUrls: ['./address-query-result-list.component.sass']
})
export class AddressQueryResultListComponent implements OnInit {

  private _features: esri.Graphic[] | Address[];

  @Input()
  set features(addresses: esri.Graphic[] | Address[]) {
    this._features = addresses;
  }

  get features(): esri.Graphic[] | Address[] {
    return this._features;
  }

  constructor(public addressSelectionService: AddressSelectionService) {
  }

  ngOnInit() {
  }

  selectFeature(feature: Address, index: number) {
    this.addressSelectionService.selectedFeature = feature;
    this.addressSelectionService.selectedIndex = index;
  }

}

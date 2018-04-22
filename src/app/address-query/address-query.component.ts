import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Address } from '../address';
import { AddressService } from '../address.service';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import esri = __esri;

@Component({
  selector: 'app-address-query',
  templateUrl: './address-query.component.html',
  styleUrls: ['./address-query.component.sass']
})
export class AddressQueryComponent implements OnInit {

  private _addresses: Address[] = [];
  private _selectedAddress: Address;
  private _searchTerms = new Subject<string>();
  private _featureSet$: Observable<esri.FeatureSet>;

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

  get searchTerms() {
    return this._searchTerms;
  }

  set featureSet$(featureSet: Observable<esri.FeatureSet>) {
    this._featureSet$ = featureSet;
  }

  get featureSet$() {
    return this._featureSet$;
  }

  constructor(private addressService: AddressService) {
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.featureSet$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => this.addressService.queryHouseNumber(value)),
    );

    this.featureSet$.subscribe(featureSet => {
      this.addresses = [];
      this.selectedAddress = null;
      const features = featureSet['features'];
      if (features) {
        features.forEach(feature => this.addresses.push(feature['attributes']));
      }
    });

  }

  onSelectedAddress(address: Address) {
    this.selectedAddress = address;
  }

}

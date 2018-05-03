import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { AddressService } from '../address.service';
import { Address } from '../address';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import esri = __esri;

@Component({
  selector: 'app-address-query',
  templateUrl: './address-query.component.html',
  styleUrls: ['./address-query.component.sass']
})
export class AddressQueryComponent implements OnInit {

  private _selectedFeature: esri.Graphic | Address;
  private _searchTerms = new Subject<string>();
  private _featureSet$: Observable<esri.FeatureSet>;

  set selectedFeature(feature: esri.Graphic | Address) {
    this._selectedFeature = feature;
  }

  get selectedFeature(): esri.Graphic | Address {
    return this._selectedFeature;
  }

  get searchTerms(): Subject<string> {
    return this._searchTerms;
  }

  set featureSet$(featureSet: Observable<esri.FeatureSet>) {
    this._featureSet$ = featureSet;
  }

  get featureSet$(): Observable<esri.FeatureSet> {
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
      switchMap(value => this.addressService.query(`ADRHSNO=${value}`, '*', 'json', 'ADDRESS'))
    );

  }

  onSelectedFeature(feature: Address) {
    this.selectedFeature = feature;
  }

}

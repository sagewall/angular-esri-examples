import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { AddressService } from '../address.service';
import { AddressSelectionService } from '../address-selection.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import esri = __esri;

@Component({
  selector: 'app-address-query',
  templateUrl: './address-query.component.html',
  styleUrls: ['./address-query.component.sass']
})
export class AddressQueryComponent implements OnInit, OnDestroy {

  private _searchTerms = new Subject<string>();
  private _featureSet$: Observable<esri.FeatureSet>;

  get searchTerms(): Subject<string> {
    return this._searchTerms;
  }

  set featureSet$(featureSet: Observable<esri.FeatureSet>) {
    this._featureSet$ = featureSet;
  }

  get featureSet$(): Observable<esri.FeatureSet> {
    return this._featureSet$;
  }

  constructor(
    private addressService: AddressService,
    public addressSelectionService: AddressSelectionService
  ) {
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.featureSet$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => {
        this.addressSelectionService.clearSelection();
        return this.addressService.query(`ADRHSNO=${value}`, '*', 'json', 'ADDRESS');
      })
    );
  }

  ngOnDestroy() {
    this.addressSelectionService.clearSelection();
  }

}

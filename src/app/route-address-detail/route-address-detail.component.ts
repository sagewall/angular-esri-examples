import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AddressService } from '../address.service';
import { Observable } from 'rxjs/internal/Observable';
import esri = __esri;

@Component({
  selector: 'app-route-address-detail',
  templateUrl: './route-address-detail.component.html',
  styleUrls: ['./route-address-detail.component.sass']
})
export class RouteAddressDetailComponent implements OnInit {

  private _featureSet$: Observable<esri.FeatureSet>;

  set featureSet$(featureSet: Observable<esri.FeatureSet>) {
    this._featureSet$ = featureSet;
  }

  get featureSet$(): Observable<esri.FeatureSet> {
    return this._featureSet$;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private addressService: AddressService
  ) {
  }

  ngOnInit() {
    this.featureSet$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => this.addressService.query(`ADNO=${params.get('id')}`, '*', 'json'))
    );
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAddressSearchComponent } from './route-address-search.component';
import { AddressSearchComponent } from '../address-search/address-search.component';

describe('RouteAddressSearchComponent', () => {
  let component: RouteAddressSearchComponent;
  let fixture: ComponentFixture<RouteAddressSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RouteAddressSearchComponent,
        AddressSearchComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAddressSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

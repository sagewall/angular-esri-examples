import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouteAddressQueryComponent } from './route-address-query.component';
import { AddressQueryComponent } from '../address-query/address-query.component';
import { AddressQueryResultListComponent } from '../address-query-result-list/address-query-result-list.component';
import { AddressService } from '../address.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddressQueryResultComponent } from '../address-query-result/address-query-result.component';
import { AddressDetailComponent } from '../address-detail/address-detail.component';
import { MapViewComponent } from '../map-view/map-view.component';
import { AddressAttributesComponent } from '../address-attributes/address-attributes.component';
import { AddressSelectionService } from '../address-selection.service';

describe('RouteAddressQueryComponent', () => {
  let component: RouteAddressQueryComponent;
  let fixture: ComponentFixture<RouteAddressQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddressAttributesComponent,
        AddressDetailComponent,
        AddressQueryComponent,
        AddressQueryResultComponent,
        AddressQueryResultListComponent,
        MapViewComponent,
        RouteAddressQueryComponent
      ],
      providers: [
        AddressService,
        AddressSelectionService
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAddressQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

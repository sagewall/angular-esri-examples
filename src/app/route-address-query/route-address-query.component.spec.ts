import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAddressQueryComponent } from './route-address-query.component';
import { AddressQueryComponent } from '../address-query/address-query.component';
import { AddressQueryResultListComponent } from '../address-query-result-list/address-query-result-list.component';
import { AddressService } from '../address.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RouteAddressQueryComponent', () => {
  let component: RouteAddressQueryComponent;
  let fixture: ComponentFixture<RouteAddressQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddressQueryComponent,
        AddressQueryResultListComponent,
        RouteAddressQueryComponent
      ],
      providers: [AddressService],
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

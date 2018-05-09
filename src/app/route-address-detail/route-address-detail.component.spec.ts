import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouteAddressDetailComponent } from './route-address-detail.component';
import { AddressDetailComponent } from '../address-detail/address-detail.component';
import { AddressAttributesComponent } from '../address-attributes/address-attributes.component';
import { MapViewComponent } from '../map-view/map-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AddressService } from '../address.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RouteAddressDetailComponent', () => {
  let component: RouteAddressDetailComponent;
  let fixture: ComponentFixture<RouteAddressDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddressAttributesComponent,
        AddressDetailComponent,
        MapViewComponent,
        RouteAddressDetailComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [AddressService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAddressDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

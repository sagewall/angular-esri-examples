import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressQueryComponent } from './address-query.component';
import { AddressService } from '../address.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddressQueryResultListComponent } from '../address-query-result-list/address-query-result-list.component';
import { AddressQueryResultComponent } from '../address-query-result/address-query-result.component';
import { AddressDetailComponent } from '../address-detail/address-detail.component';
import { MapViewComponent } from '../map-view/map-view.component';
import { AddressAttributesComponent } from '../address-attributes/address-attributes.component';

describe('AddressQueryComponent', () => {
  let component: AddressQueryComponent;
  let fixture: ComponentFixture<AddressQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddressAttributesComponent,
        AddressDetailComponent,
        AddressQueryComponent,
        AddressQueryResultComponent,
        AddressQueryResultListComponent,
        MapViewComponent
      ],
      providers: [AddressService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

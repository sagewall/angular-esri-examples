import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressQueryComponent } from './address-query.component';
import { AddressService } from '../address.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddressQueryResultListComponent } from '../address-query-result-list/address-query-result-list.component';

describe('AddressQueryComponent', () => {
  let component: AddressQueryComponent;
  let fixture: ComponentFixture<AddressQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddressQueryComponent,
        AddressQueryResultListComponent
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

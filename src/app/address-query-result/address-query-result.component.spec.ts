import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressQueryResultComponent } from './address-query-result.component';
import { Address } from '../address';

describe('AddressQueryResultComponent', () => {
  let component: AddressQueryResultComponent;
  let fixture: ComponentFixture<AddressQueryResultComponent>;

  const address = new Address();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressQueryResultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressQueryResultComponent);
    component = fixture.componentInstance;
    component.address = address;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

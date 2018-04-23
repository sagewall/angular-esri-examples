import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDetailComponent } from './address-detail.component';
import { MapViewComponent } from '../map-view/map-view.component';
import { Address } from '../address';

describe('AddressDetailComponent', () => {
  let component: AddressDetailComponent;
  let fixture: ComponentFixture<AddressDetailComponent>;

  const address = new Address();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddressDetailComponent,
        MapViewComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDetailComponent);
    component = fixture.componentInstance;
    component.address = address;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

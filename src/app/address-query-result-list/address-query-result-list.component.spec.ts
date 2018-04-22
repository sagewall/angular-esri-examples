import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressQueryResultListComponent } from './address-query-result-list.component';

describe('AddressQueryResultListComponent', () => {
  let component: AddressQueryResultListComponent;
  let fixture: ComponentFixture<AddressQueryResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressQueryResultListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressQueryResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

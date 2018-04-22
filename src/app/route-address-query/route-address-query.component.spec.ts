import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAddressQueryComponent } from './route-address-query.component';

describe('RouteAddressQueryComponent', () => {
  let component: RouteAddressQueryComponent;
  let fixture: ComponentFixture<RouteAddressQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteAddressQueryComponent ]
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

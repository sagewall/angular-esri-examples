import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressQueryResultListComponent } from './address-query-result-list.component';
import { AddressQueryResultComponent } from '../address-query-result/address-query-result.component';
import { AddressSelectionService } from '../address-selection.service';

describe('AddressQueryResultListComponent', () => {
  let component: AddressQueryResultListComponent;
  let fixture: ComponentFixture<AddressQueryResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddressQueryResultComponent,
        AddressQueryResultListComponent
      ],
      providers: [AddressSelectionService]
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

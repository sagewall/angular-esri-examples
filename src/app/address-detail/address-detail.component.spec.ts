import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressDetailComponent } from './address-detail.component';
import { MapViewComponent } from '../map-view/map-view.component';
import { Address } from '../address';

describe('AddressDetailComponent', () => {
  let component: AddressDetailComponent;
  let fixture: ComponentFixture<AddressDetailComponent>;

  const feature: Address = {
    'attributes': {
      'OBJECTID': 202143,
      'ADNO': 121984,
      'ADRHSNO': 123,
      'ADRHSNOSFX': null,
      'SUBADRUNIT': null,
      'ADDRESS': '123 NOVA LN',
      'ZIP': '80470',
      'STREET_DIRECTION_PREFIX': null,
      'STREET_NAME': 'NOVA',
      'STREET_TYPE': 'LN',
      'STREET_DIRECTION_SUFFIX': null,
      'ADRUID': 121984,
      'SUBADRUID': null,
      'BLUID': 341398,
      'BPUID': 21741,
      'RSN': 117944,
      'DATE_ADD': null,
      'DATE_MOD': 1476889296000,
      'CITY_POSTAL': 'PINE',
      'ADDRESS_TYPE': 'RESIDENTIAL',
      'PRIORITY_PIN': null,
      'SPLIT': '2162530057N3070000N425000487000',
      'CITY_MUNICIPAL': 'UNINCORPORATED',
      'CITY_WARD': '00',
      'CITY_PRECINCT': '00',
      'COMMISSIONER_DISTRICT': '3',
      'COMMISSIONER_LIVING_IN_DIST': 'Tina Francone',
      'COUNTY_PRECINCT': '2162530057',
      'FEDERAL_HOUSE_DISTRICT': '2',
      'FEDERAL_HOUSE_REPRESENTATIVE': 'Jared Polis',
      'STATE_HOUSE_DISTRICT': '25',
      'STATE_HOUSE_REPRESENTATIVE': 'Timothy Leonard',
      'STATE_SENATE_DISTRICT': '16',
      'STATE_SENATOR': 'Tim Neville',
      'RTD': 'N',
      'SJLID': null,
      'TIFA': '3',
      'ADR_LONGITUDE': 105.39652,
      'ADR_LATITUDE': 39.48037,
      'ADR_X': 3029209,
      'ADR_Y': 1599872,
      'ADR_XY_META': 'US',
      'ADR_XY_META_DESCRIPTION': 'USER SPECIFIED',
      'ADR_ELEVATION': 8326
    }, 'geometry': {'x': -11732687.8949, 'y': 4790717.457000002}
  };


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
    component.feature = feature;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

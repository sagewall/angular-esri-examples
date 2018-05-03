import { TestBed, inject } from '@angular/core/testing';

import { AddressSelectionService } from './address-selection.service';

describe('AddressSelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressSelectionService]
    });
  });

  it('should be created', inject([AddressSelectionService], (service: AddressSelectionService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { SgstService } from './sgst.service';

describe('SgstService', () => {
  let service: SgstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SgstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

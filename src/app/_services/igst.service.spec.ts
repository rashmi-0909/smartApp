import { TestBed } from '@angular/core/testing';

import { IgstService } from './igst.service';

describe('IgstService', () => {
  let service: IgstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IgstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

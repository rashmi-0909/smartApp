import { TestBed } from '@angular/core/testing';

import { TransactionmasterService } from './transactionmaster.service';

describe('TransactionmasterService', () => {
  let service: TransactionmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AccountmasterService } from './accountmaster.service';

describe('AccountmasterService', () => {
  let service: AccountmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

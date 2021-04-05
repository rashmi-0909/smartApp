import { TestBed } from '@angular/core/testing';

import { TypemasterService } from './typemaster.service';

describe('TypemasterService', () => {
  let service: TypemasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypemasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

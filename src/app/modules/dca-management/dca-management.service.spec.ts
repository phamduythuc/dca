import { TestBed } from '@angular/core/testing';

import { DcaManagementService } from './dca-management.service';

describe('DcaManagementService', () => {
  let service: DcaManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DcaManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

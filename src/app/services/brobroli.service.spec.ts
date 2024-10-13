import { TestBed } from '@angular/core/testing';

import { BrobroliService } from './brobroli.service';

describe('BrobroliService', () => {
  let service: BrobroliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrobroliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ElapsedtimerService } from './elapsedtimer.service';

describe('ElapsedtimerService', () => {
  let service: ElapsedtimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElapsedtimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SchedulerSetService } from './scheduler-set.service';

describe('SchedulerSetService', () => {
  let service: SchedulerSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchedulerSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

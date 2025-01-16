import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { buttonDeactiveGuard } from './button-deactive.guard';

describe('buttonDeactiveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => buttonDeactiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

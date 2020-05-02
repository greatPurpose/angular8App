import { TestBed } from '@angular/core/testing';

import { EnterCodeService } from './enterCode.service';

describe('EnterCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnterCodeService = TestBed.get(EnterCodeService);
    expect(service).toBeTruthy();
  });
});

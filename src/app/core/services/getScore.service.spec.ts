import { TestBed } from '@angular/core/testing';

import { GetScoreService } from './getScore.service';

describe('GetScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetScoreService = TestBed.get(GetScoreService);
    expect(service).toBeTruthy();
  });
});

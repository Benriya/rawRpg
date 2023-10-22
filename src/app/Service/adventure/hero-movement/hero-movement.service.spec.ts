import { TestBed } from '@angular/core/testing';

import { HeroMovementService } from './hero-movement.service';

describe('HeroMovementService', () => {
  let service: HeroMovementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroMovementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

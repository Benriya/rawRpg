import { TestBed } from '@angular/core/testing';

import { FightEnemyService } from './fight-enemy.service';

describe('FightEnemyService', () => {
  let service: FightEnemyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FightEnemyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

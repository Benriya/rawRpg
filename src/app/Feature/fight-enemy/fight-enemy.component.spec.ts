import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightEnemyComponent } from './fight-enemy.component';

describe('FightEnemyComponent', () => {
  let component: FightEnemyComponent;
  let fixture: ComponentFixture<FightEnemyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FightEnemyComponent]
    });
    fixture = TestBed.createComponent(FightEnemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestRewardComponent } from './chest-reward.component';

describe('ChestRewardComponent', () => {
  let component: ChestRewardComponent;
  let fixture: ComponentFixture<ChestRewardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChestRewardComponent]
    });
    fixture = TestBed.createComponent(ChestRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

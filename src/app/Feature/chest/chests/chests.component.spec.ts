import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestsComponent } from './chests.component';

describe('ChestsComponent', () => {
  let component: ChestsComponent;
  let fixture: ComponentFixture<ChestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChestsComponent]
    });
    fixture = TestBed.createComponent(ChestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

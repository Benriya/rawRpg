import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenChestComponent } from './open-chest.component';

describe('OpenChestComponent', () => {
  let component: OpenChestComponent;
  let fixture: ComponentFixture<OpenChestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenChestComponent]
    });
    fixture = TestBed.createComponent(OpenChestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

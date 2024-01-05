import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRowsComponent } from './map-rows.component';

describe('MapRowsComponent', () => {
  let component: MapRowsComponent;
  let fixture: ComponentFixture<MapRowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapRowsComponent]
    });
    fixture = TestBed.createComponent(MapRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

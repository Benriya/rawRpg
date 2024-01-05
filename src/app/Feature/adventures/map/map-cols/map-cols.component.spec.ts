import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapColsComponent } from './map-cols.component';

describe('MapColsComponent', () => {
  let component: MapColsComponent;
  let fixture: ComponentFixture<MapColsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapColsComponent]
    });
    fixture = TestBed.createComponent(MapColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

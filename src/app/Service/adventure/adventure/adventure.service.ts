import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeroMovementService } from '../hero-movement/hero-movement.service';

@Injectable({
  providedIn: 'root'
})
export class AdventureService {
  /*
    0: Empty
    1: Wall
    2: Goal
    3: Door
    4: Monster
    5: Chest
    6: Path
  */

  constructor(private readonly heroMovementService: HeroMovementService) {}

  paintPath(): number[] {
    const path = this.heroMovementService.discoveredTiles;
    return this.getMap().map((value, index) => {
      if(path.includes(index)) {
        value = 6;
      }
      return value; 
    });
  }

  getMap(): number[] {
    return Array.from(Array(256), (_, i) => {
      const step = 32;
      const col = Math.floor((i+1) / step) -1;
      if(i === 60) {
        return 2;
      }
      else if (this.dotPaint(i, [51, 68, 89, 102, 118, 130, 146, 182, 203, 219])) {
        return 3;
      }
      else if (this.dotPaint(i, [193])) {
        return 4;
      }
      else if (this.dotPaint(i, [195])) {
        return 5;
      }
      else if(i <= 32 || i >= 224 ||
        this.dotPaint(i, [101, 129, 131]) ||
          this.wallHorizontal(i, 86, 2) ||
          this.wallHorizontal(i, 90, 3) ||
          this.wallHorizontal(i, 103, 3) ||
          this.wallHorizontal(i, 140, 5) ||
          this.wallHorizontal(i, 148, 1)
        ) {
        return 1;
      } else if(
          this.calcSpace(i, [33, 34, 35], col, step) ||
          this.calcSpace(i, [37, 38, 39, 40, 41, 42], col, step) ||
          this.calcSpace(i, [44, 45, 46, 47, 48, 49, 50], col, step) ||
          this.calcSpace(i, [52, 53], col, step) ||
          this.calcSpace(i, [55, 56, 57, 58], col, step) ||
          this.calcSpace(i, [60, 61, 62], col, step)
        ) {
        return 0;
      } else {
        return 1;
      }
    });
  }

  dotPaint(i: number, places: number[]): boolean {
    return places.includes(i);
  }

  wallHorizontal(i: number, place: number, long: number): boolean {
    return i >= place && i <= place + long;
  }

  wallVertical(i: number, place: number, col: number, step: number): boolean {
    return i === place + col * step;
  }

  calcSpace(index: number, place: number[], col: number, step: number): boolean {
    const result = place.map(place => index === place + (col * step));
    return result.includes(true);
  }

}

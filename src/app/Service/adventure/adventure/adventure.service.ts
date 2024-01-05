import { Injectable } from '@angular/core';
import { HeroMovementService } from '../hero-movement/hero-movement.service';

@Injectable({
  providedIn: 'root'
})
export class AdventureService {
  Empty = 0;
  Wall = 1;
  Goal = 2;
  Door = 3;
  Monster = 4;
  Chest = 5;
  Path = 6

  maxHeight = 28;
  maxWidth = 32;

  emptyRow = Array(this.maxWidth - 2).fill(this.Empty);
  basicRow = [this.Wall, ...this.emptyRow, this.Wall];
  wallRow = Array(this.maxWidth).fill(this.Wall);

  constructor(private readonly heroMovementService: HeroMovementService) {}

  paintPath(): number[][] {
    const path = this.heroMovementService.discoveredTiles;
    return this.getMap().map((value, index) => {
      let newRow = [...value];
      for (let i = 0; i < path.length; i++) {
        if(path[i][0] === index) {
          newRow = this.replace(newRow, 1, path[i][1], [this.Path]);
        }
      }

      return newRow;
    });
  }

  getMap(): number[][] {
    const map = [this.wallRow];
    for (let i = 0; i < this.maxWidth - 2; i++) {
      map.push(this.basicRow);
    }

    this.replace(map, 3, 2, this.generate('square', 3, 2));

    this.replace(map, 5, 10, this.generate('rectangle', 5, 2, 3));

    map.push(this.wallRow);

    return map;
  }

  replace(mapRow: any, size: number, index: number, target: any): any{
    for (let i = 0; i < target.length; i++) {
      mapRow.splice(index + i, 1, target[i]);
    }
    return mapRow;
  }

  generate(type: string, x: number, pos: number, y?: number): number[][] | undefined {
    switch (type) {
      case 'square':
        const square = [];
        for (let i = 0; i < x; i++) {
          square.push(this.createRoom(x, i, pos));
        }
        return square;
      case 'rectangle':
        const rectangle = [];
        for (let i = 0; i < x; i++) {
          rectangle.push(this.createRoom(x, i, pos, y));
        }
        return rectangle;
      default:
        return undefined;
    }
  }

  createRoom(x: number, iteration: number, pos: number,  y?: number): number[] {
    const basicRow = [this.Wall, ...this.emptyRow, this.Wall];
    if(iteration === 0 || iteration === x - 1) {
      const target = [];
      for (let i = 0; i < (y ?? x); i++) {
        target.push(this.Wall);
      }
      return this.replace(basicRow, x, pos, target);
    }
    const squareRow = [this.Wall];
    for (let i = 0; i <= (y ?? x) - 3; i++) {
      squareRow.push(this.Empty);
    }
    squareRow.push(this.Wall);
    return this.replace(basicRow, x, pos, squareRow);
  }

  /*getMap(): number[] {
    console.log(this.getMap2());
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
  }*/

}

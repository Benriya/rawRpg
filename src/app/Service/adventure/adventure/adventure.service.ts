import { Injectable } from '@angular/core';
import { HeroMovementService } from '../hero-movement/hero-movement.service';
import { DimensionModel } from "../../../Model/dimension.model";

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

  maxHeight = 10;
  maxWidth = 50;

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
    for (let i = 0; i < this.maxHeight - 2; i++) {
      map.push(this.basicRow);
    }


    this.replace(map, 5, 4, this.generate('rectangle', {x: 4, y: 7}, 2, map, 2));
    this.replace(map, 3, 2, this.generate('square', {x: 4, y: 4}, 2, map, 2));
    this.replace(map, 5, 2, this.generate('rectangle', {x: 5, y: 8}, 8, map, 2));

    map[3][3] = 4;
    map[3][2] = 3;
    map[6][2] = 3;
    map[5][7] = 5;

    map.push(this.wallRow);

    return map;
  }

  replace(mapRow: any, size: number, index: number, target: any): any{
    for (let i = 0; i < target.length; i++) {
      mapRow.splice(index + i, 1, target[i]);
    }
    return mapRow;
  }

  generate(type: string, dimension: DimensionModel, pos: number, row: number[][], rowPos: number): number[][] | undefined {
    switch (type) {
      case 'square':
        const square = [];
        for (let i = 0; i < dimension.x; i++) {
          square.push(this.createRoom(dimension.x, i, pos, row[rowPos]));
          rowPos++;
        }
        return square;
      case 'rectangle':
        const rectangle = [];
        for (let i = 0; i < dimension.x; i++) {
          rectangle.push(this.createRoom(dimension.x, i, pos, row[rowPos], dimension.y));
          rowPos++;
        }
        return rectangle;
      default:
        return undefined;
    }
  }

  createRoom(x: number, iteration: number, pos: number, row: number[], y?: number): number[] {
    const basicRow = [...row];
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
}

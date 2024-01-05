import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroMovementService {
  startPosition = [1, 6];
  heroPosition$ = new BehaviorSubject<number[]>(this.startPosition);
  discoveredTiles: number[][] = [this.startPosition];

  constructor() {}

  addDiscoveredTiles(): void {
    const pos = this.heroPosition$.value;
    if(!this.discoveredTiles.includes(pos)) this.discoveredTiles.push(pos);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdventureService } from '../adventure/adventure.service';

@Injectable({
  providedIn: 'root'
})
export class HeroMovementService {
  startPosition = 33;
  heroPosition$ = new BehaviorSubject<number>(this.startPosition);
  discoveredTiles: number[] = [this.startPosition];

  constructor() { }

  addDiscoveredTiles(): void {
    const pos = this.heroPosition$.value;
    if(!this.discoveredTiles.includes(pos)) this.discoveredTiles.push(pos);
  }
}

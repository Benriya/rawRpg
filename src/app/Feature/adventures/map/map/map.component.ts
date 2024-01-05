import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AdventureService } from 'src/app/Service/adventure/adventure/adventure.service';
import { HeroMovementService } from 'src/app/Service/adventure/hero-movement/hero-movement.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  map = this.adventureService.paintPath();
  discoveredTiles: number[] = [];
  currentPosition = this.heroMovementService.heroPosition$.getValue();

  constructor(
    private readonly router: Router,
    private readonly adventureService: AdventureService,
    readonly heroMovementService: HeroMovementService) {}

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const currentPosition = this.heroMovementService.heroPosition$.getValue();
    switch (event.code) {
      case 'ArrowDown':
        if (this.map[currentPosition[0] + 1][currentPosition[1]] !== 1) this.heroMovementService.heroPosition$.next([currentPosition[0] + 1, currentPosition[1]]);
        break;
      case 'ArrowUp':
        if (this.map[currentPosition[0] - 1][currentPosition[1]] !== 1) this.heroMovementService.heroPosition$.next([currentPosition[0] - 1, currentPosition[1]]);
        break;
      case 'ArrowRight':
        if (this.map[currentPosition[0]][currentPosition[1] + 1] !== 1) this.heroMovementService.heroPosition$.next([currentPosition[0], currentPosition[1] + 1]);
        break;
      case 'ArrowLeft':
        if (this.map[currentPosition[0]][currentPosition[1] - 1] !== 1) this.heroMovementService.heroPosition$.next([currentPosition[0], currentPosition[1] - 1]);
        break;
    }
    this.heroMovementService.addDiscoveredTiles();

    /*if(this.map[this.heroMovementService.heroPosition$.getValue()] === 4) this.enemyFound();
    if(this.map[this.heroMovementService.heroPosition$.getValue()] === 5) this.chestFound();*/

    this.map = this.adventureService.paintPath();
  }

  setTileStyle(tileValue: number, player: any): any {
    console.log('a' ,player);
    /*const currentPosition = this.heroMovementService.heroPosition$.getValue();
    if(JSON.stringify(player) === JSON.stringify(currentPosition)) return 'tile-player';*/
      switch (tileValue) {
        case 0:
          return 'tile-space';
        case 1:
          return 'tile-wall';
        case 2:
          return 'tile-goal';
        case 3:
          return 'tile-door';
        case 4:
          return 'tile-monster';
        case 5:
          return 'tile-chest';
        case 6:
          return 'tile-path';
        default:
          return '';
      }
  }

  enemyFound(): void {
    this.router.navigate(['/fight']);
  }

  chestFound(): void {
    this.router.navigate(['/Open-chest']);
  }
}

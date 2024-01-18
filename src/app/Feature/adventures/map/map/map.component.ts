import {ChangeDetectionStrategy, Component, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { AdventureService } from 'src/app/Service/adventure/adventure/adventure.service';
import { HeroMovementService } from 'src/app/Service/adventure/hero-movement/hero-movement.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {
  map = this.adventureService.paintPath();
  discoveredTiles: number[] = [];
  currentPosition = this.heroMovementService.heroPosition$.getValue();
  fullPaint = 0;

  constructor(
    private readonly router: Router,
    private readonly adventureService: AdventureService,
    readonly heroMovementService: HeroMovementService) {}

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const currentPosition = this.heroMovementService.heroPosition$.getValue();
    console.log(currentPosition);
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

    this.encounters();
    this.map = this.adventureService.paintPath();
  }

  encounters(): void {
    const currentPosition = this.heroMovementService.heroPosition$.getValue();
    if(this.map[currentPosition[0]][currentPosition[1]] === 4) this.enemyFound();
    if(this.map[currentPosition[0]][currentPosition[1]] === 5) this.chestFound();
  }

  tilePlace(index: number, value: number): any {
    return value;
  }

  setTileStyle(tileValue: number): string {
      switch (tileValue) {
        case 0:
          return 'assets/floor_sprite.jpg';
        case 1:
          return 'assets/wall_sprite.jpg';
        case 2:
          return 'tile-goal';
        case 3:
          return 'assets/door_sprite.png';
        case 4:
          return 'assets/Illidan_sprite.gif';
        case 5:
          return 'assets/chest_sprite.png';
        case 6:
          return 'assets/floor_sprite.jpg';
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

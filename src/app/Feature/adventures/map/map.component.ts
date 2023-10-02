import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AdventureService } from 'src/app/Service/adventure/adventure.service';
import { CharactersService } from 'src/app/Service/characters/characters.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  position$ = new BehaviorSubject<number>(this.adventureService.startPosition);
  map = this.adventureService.getMap();

  constructor(
    private readonly router: Router,
    private readonly adventureService: AdventureService) {}

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const currentPosition = this.position$.getValue();
    switch (event.code) {
      case 'ArrowDown':
        if (this.map[currentPosition + 32] !== 1) this.position$.next(currentPosition + 32);
        break;
      case 'ArrowUp':
        if (this.map[currentPosition - 32] !== 1) this.position$.next(currentPosition - 32);
        break;
      case 'ArrowRight':
        if (this.map[currentPosition + 1] !== 1) this.position$.next(currentPosition + 1);
        break;
      case 'ArrowLeft':
        if (this.map[currentPosition - 1] !== 1) this.position$.next(currentPosition - 1);
        break;
    }
    if(this.map[this.position$.getValue()] === 4) this.enemyFound();
    if(this.map[this.position$.getValue()] === 5) this.chestFound();
  }

  setTileStyle(tileValue: number, player: boolean): string {
    if(player) return 'tile-player';
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

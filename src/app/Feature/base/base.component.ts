import { Component, HostListener } from '@angular/core';
import {CharactersService} from "../../Service/characters/characters.service";
import { AdventureService } from 'src/app/Service/adventure/adventure.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  Hero = this.characters.getHero();
  Monster = this.characters.getMonster();
  activeAction = '';
  baseActions = ['Fight', 'Open chest', 'PvP', 'Rest', 'Level up'];
  map = this.adventure.getMap();
  position$ = new BehaviorSubject<number>(this.adventure.startPosition);

  constructor(
    private readonly characters: CharactersService,
    private readonly adventure: AdventureService,
    private readonly router: Router) {}

  action(name: string): void {
    this.activeAction = name;
  }

  cancelAction(): void {
    this.activeAction = '';
  }

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
    this.router.navigate(['/open-chest']);
  }
}

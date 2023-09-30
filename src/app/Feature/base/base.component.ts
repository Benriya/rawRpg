import { Component } from '@angular/core';
import {CharactersService} from "../../Service/characters/characters.service";

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
  map = Array.from(Array(256), (_, i) => i+1);

  constructor(private characters: CharactersService) {
  }

  action(name: string): void {
    this.activeAction = name;
  }

  cancelAction(): void {
    this.activeAction = '';
  }
}

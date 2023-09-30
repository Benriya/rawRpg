import { Component } from '@angular/core';
import { CharactersService } from 'src/app/Service/characters/characters.service';

@Component({
  selector: 'app-fight-enemy',
  templateUrl: './fight-enemy.component.html',
  styleUrls: ['./fight-enemy.component.scss']
})
export class FightEnemyComponent {
  Hero = this.characters.getHero();
  Monster = this.characters.getMonster();
  loading = false;
  fightActions = ['Heavy', 'Medium', 'Light', 'Magic', 'Special'];

  constructor(private characters: CharactersService) {
  }

  action(name: string): void {
    this.loading = true;
  }

}

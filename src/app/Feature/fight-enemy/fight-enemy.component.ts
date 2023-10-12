import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from 'src/app/Model/hero.model';
import { CharactersService } from 'src/app/Service/characters/characters.service';

@Component({
  selector: 'app-fight-enemy',
  templateUrl: './fight-enemy.component.html',
  styleUrls: ['./fight-enemy.component.scss']
})
export class FightEnemyComponent implements OnDestroy {
  Hero = new BehaviorSubject<Hero>(this.characters.getHero());
  Monster = new BehaviorSubject<Hero>(this.characters.getMonster());
  loading = false;
  fightActions = ['Heavy', 'Medium', 'Light', 'Magic', 'Special'];
  fightLog: string[] = [];

  constructor(private characters: CharactersService) {}

  action(name: string): void {
    console.log(this.fightLog);
    if (this.fightLog.length >= 10) this.fightLog.splice(0, 2);
    this.loading = true;
    this.resolve(name);
    this.enemyAction();
  }

  enemyAction(): void {
    this.Hero.subscribe(hero =>  {
      this.loading = false;
      const prevHp = hero.health;
      hero.health -= 10;
      const newHp = prevHp - hero.health;
      this.fightLog.push(`${hero.name} suffered ${newHp} dmg`);
    });
  }

  resolve(name: string): void {
    this.Monster.subscribe(monster => {
      const prevHp = monster.health;
      switch (name) {
        case 'Heavy':
          monster.health -= 30;
          break;
        case 'Medium':
          monster.health -= 20;
          break;
        case 'Light':
          monster.health -= 10;
          break;
        default:
          break;
      }
      const newHp = prevHp - monster.health;
      this.fightLog.push(`${monster.name} suffered ${newHp} dmg`);
    });
  }

  ngOnDestroy(): void {
    this.Hero.unsubscribe();
    this.Monster.unsubscribe();
  }

}

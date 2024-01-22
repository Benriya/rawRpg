import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, filter, map } from 'rxjs';
import { Hero } from 'src/app/Model/hero.model';
import { CharactersService } from 'src/app/Service/characters/characters.service';
import {FightEnemyService} from "../../Service/fight-enemy/fight-enemy.service";
import {Router} from "@angular/router";
import { Monster } from 'src/app/Model/monster.model';

@Component({
  selector: 'app-fight-enemy',
  templateUrl: './fight-enemy.component.html',
  styleUrls: ['./fight-enemy.component.scss']
})
export class FightEnemyComponent implements OnInit, OnDestroy {
  Hero = new BehaviorSubject<Hero>(this.characters.getHero());
  Monster = new BehaviorSubject<Monster | null>(null);
  loading = false;
  fightActions = ['Heavy', 'Medium', 'Light', 'Magic', 'Special'];
  fightLog: string[] = [];
  monsterList: Monster[] = [];

  constructor(
    private characters: CharactersService,
    private fightEnemyService: FightEnemyService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.characters.getList().subscribe(value => {
      this.Monster.next(value[0]);
    })
  }

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
      if(hero.health < 1) this.endFight(true);
    });
  }

  resolve(name: string): void {
    let chance;
    this.Monster.subscribe(monster => {
      if(monster) {
        const prevHp = monster.health;
        switch (name) {
          case 'Heavy':
            chance = {hit: 40, scale: 1.5};
            monster.health -= this.fightEnemyService.showStr(this.Hero.getValue(), monster, chance, false);
            break;
          case 'Medium':
            chance = {hit: 60, scale: 1};
            monster.health -= this.fightEnemyService.showStr(this.Hero.getValue(), monster, chance, false);
            break;
          case 'Light':
            chance = {hit: 80, scale: 0.5};
            monster.health -= this.fightEnemyService.showStr(this.Hero.getValue(), monster, chance, false);
            break;
          case 'Magic':
            chance = {hit: 80, scale: 1.2};
            monster.health -= this.fightEnemyService.showStr(this.Hero.getValue(), monster, chance, true);
            break;
          default:
            break;
        }
        const newHp = prevHp - monster.health;
        this.fightLog.push(`${monster.name} suffered ${newHp} dmg`);
        if(monster.health < 1) this.endFight(false);
      }
    });
  }

  endFight(player: boolean): void {
      const message = player ? "You've lost the battle" : "You've won the battle"
      window.alert(message);
      this.router.navigate(['/Adventure']);
  }

  ngOnDestroy(): void {
    this.Hero.unsubscribe();
    this.Monster.unsubscribe();
  }

}

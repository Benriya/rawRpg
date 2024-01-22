import { Injectable } from '@angular/core';
import { Hero } from "../../Model/hero.model";
import { Monster } from 'src/app/Model/monster.model';

@Injectable({
  providedIn: 'root'
})
export class FightEnemyService {

  constructor() { }

  hitCalc(baseHit: number, attacker: Hero | Monster, enemy: Hero |Monster, scale = 1): number {
    let melee = 0;
    if(scale !== 1) melee = 0.2;
    return (baseHit * scale - (enemy.agility * 0.1) + (attacker.agility * 0.1 + melee)) > baseHit ?
            baseHit : (baseHit * scale - (enemy.agility * 0.1) + (attacker.agility * 0.1 + melee))
  }

  showStr(attacker: Hero | Monster, enemy: Hero | Monster, chance: {scale: number, hit: number}, magic: boolean) {
    const finalDmg = magic ? attacker.intellect * 1.2 : attacker.strength * chance.scale;
    const hitChance = magic ? this.hitCalc(chance.hit, attacker, enemy) : this.hitCalc(100, attacker, enemy, (chance.hit / 100));
    const actualHit = (Math.floor(Math.random() * 100) + 1);
    const def = enemy.defense / 3;

    if(actualHit < hitChance) {

      return Math.floor(finalDmg - def) < 0 ? 0 : Math.floor(finalDmg - def);
    } else {
      return  0;
    }
  }
}

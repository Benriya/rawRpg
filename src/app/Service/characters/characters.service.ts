import { Injectable } from '@angular/core';
import { Hero } from "../../Model/hero.model";
import {Race, Stat} from "../../Model/races.model";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  raceList: Race[] = [
    { name: 'Human', stats: { maxHp: 100, regen: 20, armor: 10, defense: 5, strength: 3, agility: 3, intellect: 3, luck: 3, gold: 100 }},
    { name: 'Orc', stats: { maxHp: 100, regen: 20, armor: 10, defense: 5, strength: 3, agility: 3, intellect: 3, luck: 3, gold: 100 }},
    { name: 'Goblin', stats: { maxHp: 100, regen: 20, armor: 10, defense: 5, strength: 3, agility: 3, intellect: 3, luck: 3, gold: 100 }},
    { name: 'Dwarf', stats: { maxHp: 100, regen: 20, armor: 10, defense: 5, strength: 3, agility: 3, intellect: 3, luck: 3, gold: 100 }},
    { name: 'Elf', stats: { maxHp: 100, regen: 20, armor: 10, defense: 5, strength: 3, agility: 3, intellect: 3, luck: 3, gold: 100 }},
    { name: 'Troll', stats: { maxHp: 100, regen: 20, armor: 10, defense: 5, strength: 3, agility: 3, intellect: 3, luck: 3, gold: 100 }},
    { name: 'Draenei', stats: { maxHp: 100, regen: 20, armor: 10, defense: 5, strength: 3, agility: 3, intellect: 3, luck: 3, gold: 100 }},
    { name: 'Lizard', stats: { maxHp: 100, regen: 20, armor: 10, defense: 5, strength: 3, agility: 3, intellect: 3, luck: 3, gold: 100 }},
    { name: 'Skeleton', stats: { maxHp: 100, regen: 20, armor: 10, defense: 5, strength: 3, agility: 3, intellect: 3, luck: 3, gold: 100 }},
    { name: 'Gnome', stats: { maxHp: 100, regen: 20, armor: 10, defense: 5, strength: 3, agility: 3, intellect: 3, luck: 3, gold: 100 }},
    { name: 'Worgen', stats: { maxHp: 100, regen: 20, armor: 10, defense: 5, strength: 3, agility: 3, intellect: 3, luck: 3, gold: 100 }}
  ]

  constructor() { }

  getHero(): Hero {
    return {
      name: 'Mekken',
      description: 'yet unknown',
      img: '',
      race: 'Draenei',
      id: '1',
      health: 10000,
      maxHp: 10000,
      regen: 100,
      armor: 10,
      defense: 10,
      strength: 8,
      intellect: 15,
      agility: 3,
      luck: 10,
      gold: 99999999,
      experience: 0,
      level: 99,
      talent: 10,
      type: 'Player',
      timeout: 10
    }
  }

  getMonster(): Hero {
    return {
      name: 'Kuroko',
      description: 'known',
      img: '',
      race: 'Draenei',
      id: '1',
      health: 20,
      maxHp: 20,
      regen: 10,
      armor: 100,
      defense: 10,
      strength: 10,
      intellect: 10,
      agility: 10,
      luck: 10,
      gold: 1,
      experience: 100,
      level: 99,
      talent: 10,
      type: 'monster',
      timeout: 10
    }
  }

  getRaceStats(raceName: string): Stat {
    for (const raceValue of this.raceList) {
      if (raceValue.name === raceName) {
        return raceValue.stats;
      }
    }
    throw new Error("Shouldn't be reachable");
  }

}

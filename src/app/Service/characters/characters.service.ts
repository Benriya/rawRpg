import { Injectable } from '@angular/core';
import { Hero } from "../../Model/hero-model";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() { }

  getHero(): Hero {
    return {
      name: 'Mekken',
      description: 'yet unknown',
      img: '',
      race: 'Draenei',
      id: '1',
      hp: 10000,
      maxHp: 10000,
      regen: 100,
      armor: 1000,
      defense: 100,
      strength: 100,
      intellect: 100,
      agility: 100,
      luck: 100,
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
      hp: 1000,
      maxHp: 1000,
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
}

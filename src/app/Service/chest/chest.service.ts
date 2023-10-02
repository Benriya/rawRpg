import { Injectable } from '@angular/core';
import { Chest } from 'src/app/Model/chest.model';

@Injectable({
  providedIn: 'root'
})
export class ChestService {

  constructor() { }

  getChest(chestName: string): Chest | null {
    for (const chestValue of this.chestList) {
      if (chestValue.value === chestName) {
        return chestValue;
      }
    }
    return null;
  }

  chestList: Array<Chest> = [
    {
      value: 'Minor',
      rewards: ['experience', 'gold', 'armor', 'armor', 'gold', 'armor'],
      scaling: Math.round(Math.random() * 20 + 1),
      chance: 95,
      rewardTypeMultiplier: {experience: 0.5, armor: 1, gold: 3},
      price: 50
    }
  ]
}

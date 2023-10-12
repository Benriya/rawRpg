import { Injectable } from '@angular/core';
import { Chest } from 'src/app/Model/chest.model';

@Injectable({
  providedIn: 'root'
})
export class ChestService {
  chestList: Chest[] = [];

  constructor() {
    this.chestList = [
      {
        value: 'Minor',
        rewards: ['experience', 'gold', 'armor', 'armor', 'gold', 'armor'],
        scaling: Math.round(Math.random() * 20 + 1),
        chance: 95,
        rewardTypeMultiplier: {experience: 0.5, armor: 1, gold: 3},
        price: 50
      },
      {
        value: 'Small',
        rewards: ['experience', 'gold', 'armor', 'armor', 'gold', 'gold', 'experience', 'gold'],
        scaling: Math.round(Math.random() * 30 + 10),
        chance: 85,
        rewardTypeMultiplier: {experience: 0.5, armor: 1, gold: 3},
        price: 100
      },
      {
        value: 'Normal',
        rewards: ['experience', 'gold', 'armor', 'experience', 'armor', 'armor', 'experience', 'gold'],
        scaling: Math.round(Math.random() * 40 + 20),
        chance: 75,
        rewardTypeMultiplier: {experience: 0.5, armor: 1, gold: 3},
        price: 150
      },
      {
        value: 'Big',
        rewards: ['experience', 'gold', 'armor', 'gold'],
        scaling: Math.round(Math.random() * 50 + 30),
        chance: 65,
        rewardTypeMultiplier: {experience: 0.5, armor: 1, gold: 3},
        price: 200
      }
    ];
  }

    getChest(chestName: string): Chest | null {
      for (const chestValue of this.chestList) {
        if (chestValue.value === chestName) {
          return chestValue;
        }
      }
      return null;
    }


}
/*case 'minor':
good = (61 - hero.luck) <= 10 ? 10 : (61 - hero.luck);
rewards.push('experience', 'gold', 'armor', 'armor', 'gold', 'armor');
scale = Math.round(Math.random() * 200 + 1);
reward = this.calculateReward(rewards, scale);
break;
case 'small':
good = (66 - hero.luck) <= 20 ? 20 : (66 - hero.luck);
rewards.push('experience', 'gold', 'armor', 'armor', 'gold', 'gold', 'experience', 'gold');
scale = Math.round(Math.random() * 300 + 1);
reward = this.calculateReward(rewards, scale);
break;
case 'normal':
good = (71 - hero.luck) <= 30 ? 30 : (71 - hero.luck);
rewards.push('experience', 'gold', 'armor', 'experience', 'armor', 'armor', 'experience', 'gold');
scale = Math.round(Math.random() * 400 + 1);
reward = this.calculateReward(rewards, scale);
break;
case 'big':
good = (76 - hero.luck) <= 40 ? 40 : (76 - hero.luck);
rewards.push('experience', 'gold', 'armor', 'gold');
scale = Math.round(Math.random() * 500 + 1);
reward = this.calculateReward(rewards, scale);
break;
case 'huge':
good = (81 - hero.luck * 0.9) <= 50 ? 50 : (91 - hero.luck * 0.9);
rewards.push('experience', 'gold', 'armor', 'experience', 'armor', 'armor', 'experience', 'gold');
scale = Math.round(Math.random() * 600 + 1);
reward = this.calculateReward(rewards, scale);
break;
case 'gorgeous':
good = (86 - hero.luck * 0.7) <= 60 ? 60 : (86 - hero.luck * 0.7);
rewards.push('strength', 'agility', 'intellect', 'defense', 'regen',);
reward = this.calculateReward(rewards, 1);
break;
case 'giant':
good = (91 - hero.luck * 0.5) <= 70 ? 70 : (91 - hero.luck * 0.5);
rewards.push('strength', 'agility', 'intellect', 'defense', 'regen',);
reward = this.calculateReward(rewards, 3);
break;
case 'colossus':
good = (96 - hero.luck * 0.3) <= 70 ? 70 : (96 - hero.luck * 0.3);
rewards.push('strength', 'agility', 'intellect', 'defense');
reward = this.calculateReward(rewards, 5);
break;
case 'god':
good = (99 - hero.luck * 0.1) <= 70 ? 70 : (99 - hero.luck * 0.1);
rewards.push('strength', 'agility', 'intellect', 'defense');
reward = this.calculateReward(rewards, 10);
break;
*/

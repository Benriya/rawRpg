import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chest } from 'src/app/Model/chest.model';
import { ChestService } from 'src/app/Service/chest/chest.service';
import {CharactersService} from "../../../Service/characters/characters.service";
import {Hero} from "../../../Model/hero.model";

@Component({
  selector: 'app-chests',
  templateUrl: './chests.component.html',
  styleUrls: ['./chests.component.scss']
})
export class ChestsComponent {
  chestList: Chest[] = [];
  hero = this.charactersService.getHero();
  openedChest: Chest | null = null;
  reward = 'Better luck next time!';
  amount = 0;

  constructor(
    private readonly router: Router,
    private readonly charactersService: CharactersService) {
    const chestService = new ChestService();
    this.chestList = chestService.chestList;
  }

  back(): void {
    this.cancerStringCannotBeIndexShitHero(this.hero);
    //add endpoint call
    this.router.navigate(['Adventure']);
  }

  open(chestValue: string): void {
    const openedChest = this.chestList.filter(chest => chestValue === chest.value);
    this.openedChest = openedChest[0];
    this.calculateReward(openedChest[0]);
  }

  //do something with this mess
  calculateReward(openedChest: Chest): void {
    if(!!openedChest) {
      if(Math.ceil(Math.random() * 100) <= openedChest.chance) {
        this.reward = openedChest.rewards[Math.floor(Math.random() * openedChest.rewards.length)];
        const amount = this.cancerStringCannotBeIndexShitChest(openedChest) ?? 0;
        this.amount = amount * openedChest.scaling;
      }
    }
  }

  cancerStringCannotBeIndexShitChest(openedChest: Chest): number | undefined {
    switch(this.reward) {
      case 'experience':
        return openedChest.rewardTypeMultiplier['experience'];
      case 'gold':
        return openedChest.rewardTypeMultiplier['gold'];
      case 'armor':
        return openedChest.rewardTypeMultiplier['armor'];
      case 'health':
        return openedChest.rewardTypeMultiplier['health'];
      case 'talent':
        return openedChest.rewardTypeMultiplier['talent'];
      default:
        return undefined;
    }
  }

  cancerStringCannotBeIndexShitHero(addHeroStat: Hero): undefined {
    switch(this.reward) {
      case 'experience':
         addHeroStat['experience'] += this.amount;
         break;
      case 'gold':
         addHeroStat['gold'] += this.amount;
         break;
      case 'armor':
         addHeroStat['armor'] += this.amount;
         break;
      case 'health':
         addHeroStat['health'] += this.amount;
         break;
      case 'talent':
         addHeroStat['talent'] += this.amount;
         break;
      default:
        return undefined;
    }
  }
}

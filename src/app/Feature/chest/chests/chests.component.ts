import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chest, RewardTypesMultiplier } from 'src/app/Model/chest.model';
import { ChestService } from 'src/app/Service/chest/chest.service';

@Component({
  selector: 'app-chests',
  templateUrl: './chests.component.html',
  styleUrls: ['./chests.component.scss']
})
export class ChestsComponent {
  chestList = this.chestService.chestList;
  closed = true;

  constructor(
    private readonly router: Router,
    private readonly chestService: ChestService) {}

  cancel(): void {
    this.router.navigate(['Adventure']);
  }

  open(chestValue: string): void {
    this.closed = !this.closed;
    const openedChest = this.chestList.filter(chest => chestValue === chest.value);
    this.calculateReward(openedChest[0]);
  }

  reward = 'Better luck next time!';
  amount = 0;

  //do something with this mess
  calculateReward(openedChest: Chest): void {
    if(!!openedChest) {
      if(Math.ceil(Math.random() * 100) <= openedChest.chance) {
        this.reward = openedChest.rewards[Math.floor(Math.random() * openedChest.rewards.length)];
        const amount = this.cancerStringCannotBeIndexShit(openedChest) ?? 0;
        this.amount = amount * openedChest.scaling;
      }
    }
  }

  cancerStringCannotBeIndexShit(openedChest: Chest): number | undefined {
    switch(this.reward) {
      case 'experience':
        return openedChest.rewardTypeMultiplier['experience'];
      case 'gold':
        return openedChest.rewardTypeMultiplier['gold'];
      case 'armor':
        return openedChest.rewardTypeMultiplier['armor'];
      case 'health':
        return openedChest.rewardTypeMultiplier['health'];  
      case 'armor':
        return openedChest.rewardTypeMultiplier['armor'];  
      case 'talent':
        return openedChest.rewardTypeMultiplier['talent'];
      default:
        return undefined;
    }
  }
}

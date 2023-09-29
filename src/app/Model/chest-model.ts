export interface Chest {
  value: string;
  rewards: string[];
  scaling: number;
  chance: number;
  rewardTypeMultiplier: rewardTypesMultiplier;
  price?: number;
}

export const getChest = (chestName: string) => {
  for (const chestValue of chestList) {
    if (chestValue.value === chestName) {
      return chestValue;
    }
  }
  throw new Error("Shouldn't be reachable");
}

interface rewardTypesMultiplier {
  experience?: number;
  gold?: number;
  armor?: number;
  health?: number;
  ability?: number;
}

const chestList: Array<Chest> = [
  {
    value: 'Minor',
    rewards: ['experience', 'gold', 'armor', 'armor', 'gold', 'armor'],
    scaling: Math.round(Math.random() * 20 + 1),
    chance: 95,
    rewardTypeMultiplier: {experience: 0.5, armor: 1, gold: 3},
    price: 50
  }
]

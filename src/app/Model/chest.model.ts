export interface Chest {
  value: string;
  rewards: string[];
  scaling: number;
  chance: number;
  rewardTypeMultiplier: RewardTypesMultiplier;
  price?: number;
}

export interface RewardTypesMultiplier {
  experience?: number;
  gold?: number;
  armor?: number;
  health?: number;
  talent?: number;
}

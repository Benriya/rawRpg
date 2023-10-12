export interface Race {
  name: string,
  stats: Stat
}

export interface Stat {
  maxHp: number,
  regen: number,
  armor: number,
  defense: number,
  strength: number,
  intellect: number,
  agility: number,
  luck: number,
  gold: number,
}

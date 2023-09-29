export const getRaceStats = (raceName: string): Stat => {
  for (const raceValue of raceList) {
    if (raceValue.name === raceName) {
      return raceValue.stats;
    }
  }
  throw new Error("Shouldn't be reachable");
}

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

const raceList: Array<Race> = [
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

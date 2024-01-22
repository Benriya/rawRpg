export interface Monster {
    name: string,
    description: string,
    img: string,
    race: string,
    id: string,
    health: number,
    maxHp: number,
    armor: number,
    defense: number,
    strength: number,
    intellect: number,
    agility: number,
    luck: number,
    gold: number,
    experience: number,
    level: number,
    type: 'easy' | 'medium' | 'hard' | 'boss'
  }
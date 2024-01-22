import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Hero } from "../../Model/hero.model";
import {Race, Stat} from "../../Model/races.model";
import { Observable } from 'rxjs';
import { Monster } from 'src/app/Model/monster.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  raceList: Race[] = [
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

  constructor(private httpClient: HttpClient) { }

  getHero(): Hero {
    return {
      name: 'Mekken',
      description: 'yet unknown',
      img: '',
      race: 'Draenei',
      id: '1',
      health: 10000,
      maxHp: 10000,
      regen: 100,
      armor: 10,
      defense: 10,
      strength: 8,
      intellect: 15,
      agility: 3,
      luck: 10,
      gold: 99999999,
      experience: 0,
      level: 99,
      talent: 10
    }
  }

  getMonster(): Hero {
    return {
      name: 'Kuroko',
      description: 'known',
      img: '',
      race: 'Draenei',
      id: '1',
      health: 20,
      maxHp: 20,
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
      talent: 10
    }
  }

  getRaceStats(raceName: string): Stat {
    for (const raceValue of this.raceList) {
      if (raceValue.name === raceName) {
        return raceValue.stats;
      }
    }
    throw new Error("Shouldn't be reachable");
  }

  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Authorization'});

  getList(): Observable<Monster[]> {
    return this.httpClient.get<Monster[]>('/api/Monsters', { headers: this.headers });
  }

  getMonstersByDifficult(diff: String): Observable<Monster[]> {
    return this.httpClient.get<Monster[]>(`/api/Monster/${diff}`, { headers: this.headers });
  }

  /*getItemById(id: number): Observable<Course | undefined> {
    return this.httpClient.get<Course>(`/api/Courses/${id}`, { headers: this.headers });
  }

  updateItem(id: number, course: Course): Observable<Course> {
    return this.httpClient.patch<Course>(`/api/Courses/${id}`, course, { headers: this.headers });
  }

  removeItem(id: number): Observable<Course> {
    return this.httpClient.delete<Course>(`/api/Courses/${id}`, { headers: this.headers });
  }

  searchItems(text: string): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`/api/Courses?textFragment=${text}`, { headers: this.headers });
  }

  orderItems(text: string): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`/api/Courses?sort=${text}`, { headers: this.headers });
  }

  getAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(`/api/authors`, { headers: this.headers });
  }*/

}

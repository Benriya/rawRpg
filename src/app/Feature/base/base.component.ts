import { Component } from '@angular/core';
import {CharactersService} from "../../Service/characters/characters.service";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  Hero = this.characters.getHero();
  Monster = this.characters.getMonster();
  activeAction = '';

  constructor(private characters: CharactersService) {
  }
}

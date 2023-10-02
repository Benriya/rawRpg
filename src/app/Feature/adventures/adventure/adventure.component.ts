import { Component } from '@angular/core';
import { CharactersService } from 'src/app/Service/characters/characters.service';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss']
})
export class AdventureComponent {
  Hero = this.characters.getHero();

  constructor(private characters: CharactersService) {}
}

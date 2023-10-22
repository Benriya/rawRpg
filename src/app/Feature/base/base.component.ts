import { Component, HostListener } from '@angular/core';
import {CharactersService} from "../../Service/characters/characters.service";
import { AdventureService } from 'src/app/Service/adventure/adventure/adventure.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  Hero = this.characters.getHero();
  Monster = this.characters.getMonster();
  activeAction = '';
  baseActions = ['Adventure', 'Open-chest', 'PvP', 'Rest', 'Level up'];

  constructor(
    private readonly characters: CharactersService,
    private readonly router: Router) {}

  action(name: string): void {
    this.router.navigate([name]);
  }

  cancelAction(): void {
    this.activeAction = '';
  }

  
}

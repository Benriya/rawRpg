import {Component, Input} from '@angular/core';
import { Hero } from 'src/app/Model/hero.model';
import { Monster } from 'src/app/Model/monster.model';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent {
  @Input() character: Hero | Monster | null = null;
}

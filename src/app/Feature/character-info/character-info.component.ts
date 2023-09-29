import {Component, Input} from '@angular/core';
import {Hero} from "../../Model/hero-model";

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent {
  @Input() character: Hero | null = null;
}

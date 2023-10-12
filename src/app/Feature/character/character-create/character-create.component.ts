import { Component } from '@angular/core';
import { CharactersService } from "../../../Service/characters/characters.service";
import { FormControl } from '@angular/forms';
import {Race} from "../../../Model/races.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.scss']
})
export class CharacterCreateComponent {
  raceList = this.charactersService.raceList;
  readonly selectedRace = new FormControl<Race | null>(null);

  constructor(
    private readonly charactersService: CharactersService,
    private readonly router: Router
  ) {}

  getStats(): any {
    return this.selectedRace.value?.stats
  }

  save(): void {
    //save character
    this.router.navigate(['/Base']);
  }
}

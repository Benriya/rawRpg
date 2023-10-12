import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FightEnemyComponent } from './Feature/fight-enemy/fight-enemy.component';
import { BaseComponent } from './Feature/base/base.component';
import { AdventureComponent } from './Feature/adventures/adventure/adventure.component';
import { ChestsComponent } from './Feature/chest/chests/chests.component';
import {CharacterCreateComponent} from "./Feature/character/character-create/character-create.component";

export const routes = [
  {
    path: "fight",
    component: FightEnemyComponent,
  },
  {
    path: "Open-chest",
    component: ChestsComponent,
  },
  {
    path: "Adventure",
    component: AdventureComponent,
  },
  {
    path: "Character-create",
    component: CharacterCreateComponent,
  },
  {
    path: "Base",
    component: BaseComponent,
  },
  {
    path: "**",
    component: BaseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

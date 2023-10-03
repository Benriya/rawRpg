import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FightEnemyComponent } from './Feature/fight-enemy/fight-enemy.component';
import { BaseComponent } from './Feature/base/base.component';
import { AdventureComponent } from './Feature/adventures/adventure/adventure.component';
import { ChestsComponent } from './Feature/chest/chests/chests.component';

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
    path: "**",
    component: BaseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

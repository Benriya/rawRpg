import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FightEnemyComponent } from './Feature/fight-enemy/fight-enemy.component';
import { BaseComponent } from './Feature/base/base.component';
import { OpenChestComponent } from './Feature/open-chest/open-chest.component';

export const routes = [
  {
    path: "fight",
    component: FightEnemyComponent,
  },
  {
    path: "open-chest",
    component: OpenChestComponent,
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

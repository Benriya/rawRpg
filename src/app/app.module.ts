import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Feature/header/header.component';
import { BaseComponent } from './Feature/base/base.component';
import { AuthComponent } from './Feature/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ActionButtonComponent } from './Feature/action-button/action-button.component';
import { MatButtonModule } from '@angular/material/button';
import { CharacterInfoComponent } from './Feature/character-info/character-info.component';
import { ActionListComponent } from './Feature/action-list/action-list.component';
import { CharacterCreateComponent } from './Feature/character-create/character-create.component';
import { MatInputModule } from '@angular/material/input';
import { FightEnemyComponent } from './Feature/fight-enemy/fight-enemy.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { OpenChestComponent } from './Feature/open-chest/open-chest.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BaseComponent,
    AuthComponent,
    ActionButtonComponent,
    CharacterInfoComponent,
    ActionListComponent,
    CharacterCreateComponent,
    FightEnemyComponent,
    OpenChestComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

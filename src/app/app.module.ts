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
import { ActionListComponent } from './Feature/action-list/action-list.component';
import { CharacterCreateComponent } from './Feature/character/character-create/character-create.component';
import { MatInputModule } from '@angular/material/input';
import { FightEnemyComponent } from './Feature/fight-enemy/fight-enemy.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MapComponent } from './Feature/adventures/map/map/map.component';
import { AdventureComponent } from './Feature/adventures/adventure/adventure.component';
import { CharacterInfoComponent } from './Feature/character/character-info/character-info.component';
import { ChestsComponent } from './Feature/chest/chests/chests.component';
import { ChestRewardComponent } from './Feature/chest/chest-reward/chest-reward.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MapRowsComponent } from './Feature/adventures/map/map-rows/map-rows.component';
import { MapColsComponent } from './Feature/adventures/map/map-cols/map-cols.component';
import { HttpClientModule } from '@angular/common/http';

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
    MapComponent,
    AdventureComponent,
    ChestsComponent,
    ChestRewardComponent,
    MapRowsComponent,
    MapColsComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

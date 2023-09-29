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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BaseComponent,
    AuthComponent,
    ActionButtonComponent,
    CharacterInfoComponent,
    ActionListComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

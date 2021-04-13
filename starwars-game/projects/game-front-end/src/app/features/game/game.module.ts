import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { PlayerModule } from 'player';



@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    PlayerModule
  ]
})
export class GameModule { }

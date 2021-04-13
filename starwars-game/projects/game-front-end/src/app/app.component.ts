import { Component } from '@angular/core';
import { Position } from 'player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //#region Fields
  title = 'game-front-end';
  playerPosition: Position = {
    x: 10,
    y: 200
  };
  //#endregion

}

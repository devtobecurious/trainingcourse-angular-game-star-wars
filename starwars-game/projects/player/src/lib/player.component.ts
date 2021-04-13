import { Component, Input, OnInit } from '@angular/core';
import { Position } from './models/position';

@Component({
  selector: 'lib-player',
  templateUrl: './player.component.html',
  styleUrls: [
    './player.component.css'
  ]
})
export class PlayerComponent implements OnInit {
  //#region Fields
  @Input()
  position!: Position;
  //#endregion

  constructor() { }

  //#region Public methods
  ngOnInit(): void {
  }
  //#endregion
}

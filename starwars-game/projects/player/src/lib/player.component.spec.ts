import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PlayerComponent } from './player.component';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
  });

  it('should create and get a default position', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.position).toBeTruthy();
  });

  it('should move the player by input keyup', () => {
    // const divPlayer = fixture.nativeElement.querySelector('div.player');

    // expect(divPlayer).toBeTruthy();

    const divPlayer = fixture.debugElement.query(By.css('div.player'));
    expect(divPlayer).toBeTruthy();

    divPlayer.triggerEventHandler('keydown.enter', {});
    expect(component.position).toBeTruthy();
    expect(component.position.x).toBe(1);
    expect(component.position.y).toBe(1);
  });
});

import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameTick = new EventEmitter<number>();
  tickCounter = 0;
  interval;
  // running = false;

  constructor() { }

  ngOnInit(): void {
  }

  onStartBtn() {
    // this.running = true;
    this.interval = setInterval(() => {
      this.checkUpdate();
    }, 1000);
  }

  onStopBtn() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private checkUpdate() {
    // if (this.running) {
    //   console.log(this.tickCounter);
      this.gameTick.emit(this.tickCounter);
      this.tickCounter++;
    // }
  }
}

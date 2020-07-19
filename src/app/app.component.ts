import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds = [];
  evens = [];

  onTick(tickNumber: number) {
    if (tickNumber % 2 === 0) {
      this.evens.push(tickNumber);
    } else {
      this.odds.push(tickNumber);
    }
  }
}

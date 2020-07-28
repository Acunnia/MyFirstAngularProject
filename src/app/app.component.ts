import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onlyEvens = [1, 3, 5];
  onlyOdds = [2, 4];
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
}

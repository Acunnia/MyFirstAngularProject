import { Component } from '@angular/core';
import {Timestamp} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.white{color: white}']
})
export class AppComponent {
  pressed = false;
  count = [];

  clickHandle() {
    this.pressed = !this.pressed;
    this.count.push(new Date);
  }
}

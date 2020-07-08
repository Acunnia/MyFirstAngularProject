import { Component } from '@angular/core';

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
    this.count.push(1);
  }
}

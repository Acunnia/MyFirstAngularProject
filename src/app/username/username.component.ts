import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit(): void {
  }

  isEmpty() {
    return this.username === '';
  }

  resetUsername() {
    this.username = '';
  }

}

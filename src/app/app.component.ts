import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'countDown';
  days: number;
  hours: number;
  minutes: number;
  seconds: number;


  rest() {
    this.days = 14;
    this.hours = 0;
    this.minutes = 0
    this.seconds = 0
  }

  constructor() {
    this.rest();
  }

  ngOnInit(): void {
    this.days = 13;
    this.hours = 23;
    this.minutes = 59;
    this.seconds = 60;

    setInterval(() => {
      if (this.seconds <= 0) {
        this.seconds = 60;
        if (this.minutes <= 0) {
          this.minutes = 60;
          if (this.hours <= 0) {
            this.hours = 23;
            if (this.days <= 0) {
              this.rest();  //reset contdown
            } else {
              this.days -= 1;
            }
          } else {
            this.hours -= 1;
          }
        } else {
          this.minutes -= 1;
        }
      } else {
        this.seconds -= 1;
      }
    }, 1000);
  }
}

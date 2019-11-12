import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
const NUMBER = 0;
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() backgroundColor = '#d9d9d9';
  private number = NUMBER;
  @Output() finish = new EventEmitter();
  @Input()
  set seconds(value: any) {
    if (isNaN(value)) {
      this.number = NUMBER;
    } else {
      this.number = value;
    }
  }
  get seconds() {
    return this.number;
  }
  interval: any;
  startTimer() {
    this.interval = setInterval( () => {
      if (this.number > 0 ) {
        this.number--;
      } else {
        this.stopTimer();
        this.finish.emit();
      }
    }, 1000);
  }
  stopTimer() {
    clearInterval(this.interval);
  }
  resetTimer() {
    this.stopTimer();
    this.number = NUMBER;
  }
  constructor() { }

  ngOnInit() {
  }

}

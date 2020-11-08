import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ElapsedtimerService } from './elapsedtimer.service';

@Component({
  selector: 'srr-elapsedtimer',
  template: `
    <h1 id="timer"><span *ngIf="this.timerService.hours < 10">0</span>{{this.timerService.hours}}:<span *ngIf="this.timerService.minutes < 10">0</span>{{this.timerService.minutes}}:<span *ngIf="this.timerService.seconds < 10">0</span>{{this.timerService.seconds}}</h1>
  `,
  styles: [
  ],
})
export class ElapsedtimerComponent implements OnInit {


  timeSubscription : Subscription;  
  
  private timeObservable: any;
  private exceededTimeSet = 0;

  constructor(
    public timerService: ElapsedtimerService
  ) {

  }

  ngOnInit(): void {
    this.resetTimer();
    this.pauseTimer();
    this.resumeTimer();
    this.startNowInvokeFunc();
    this.delayStartInvokeFunc();
    this.defaultSettingsInvokeFunc();
  } 

  //this will start the timer as soon as it gets called
  startNowFunc() {
    this.timeObservable = timer(0, 1000)
    this.timeSubscription = this.timeObservable.subscribe(x => {
      this.displayTimer()
    });
  }  

  //this will get called inside the startNowFunc(). this is where the actual timer function calculation happens
  displayTimer() {
    if (this.timerService.seconds < 59 && this.timerService.start == 1) {
      this.timerService.seconds = this.timerService.seconds + 1;
      if (this.timerService.exceededTimeSet == 1) {
        this.timerExceedColourChange();
      }
    }
    else {
      if (this.timerService.minutes < 59 && this.timerService.start == 1) {
        this.timerService.minutes = this.timerService.minutes + 1;
        this.timerService.seconds = 0;
      }
      else if (this.timerService.start == 1) {
        this.timerService.hours = this.timerService.hours + 1;
        this.timerService.minutes = 0;
        this.timerService.seconds = 0;
      }
    }
  }

  //this is the actual function which will change the colour of the text after a certain moment
  private timerExceedColourChange() {
    this.exceededTimeSet = 0;
    if (this.timerService.hours >= this.timerService.exceededHour && this.timerService.minutes >= this.timerService.exceededMinutes && this.timerService.seconds >= this.timerService.exceededSeconds) {
      document.getElementById('timer').style.color = this.timerService.exceededColour
    }
  }  

  //this is the function which gets invoked when resetTimer called from service.ts
  resetTimer() {
    this.timerService.resetTimerInvoke.subscribe(() => {
      this.timerService.start = 0;
      this.timerService.hours = 0;
      this.timerService.minutes = 0;
      this.timerService.seconds = 0;
      document.getElementById('timer').style.color = this.timerService.timerColour;
    });
  }

  //this is the function which gets invoked when pauseTimer called from service.ts
  pauseTimer() {
    this.timerService.pauseTimerInvoke.subscribe(() => {
      this.timerService.start = 0;
      this.timerService.hours = this.timerService.hours;
      this.timerService.minutes = this.timerService.minutes;
      this.timerService.seconds = this.timerService.seconds;
    });
  }

  //this is the function which gets invoked when resumeTimer called from service.ts
  resumeTimer() {
    this.timerService.resumeTimerInvoke.subscribe(() => {
      this.timerService.start = 1;
    });
  }

  //this is the function which gets invoked when startTimer called from service.ts
  startNowInvokeFunc() {
    this.timerService.startTimerInvoke.subscribe(() => {
      this.startNowFunc();
    });
  }

  //this is the function which gets invoked when delayStart called from service.ts
  delayStartInvokeFunc() {
    this.timerService.delayStartInvoke.subscribe(seconds => {
      this.timeObservable = timer(0, 1000)
      this.timeObservable.subscribe(x => {
        setTimeout(() => { this.displayTimer() }, seconds * 1000)
      });
    });
  }
  
  //this is the function which gets invoked when delayStart called from service.ts
  defaultSettingsInvokeFunc() {
    this.timerService.defaultSettingsInvoke.subscribe(() => {
      document.getElementById('timer').style.color = this.timerService.timerColour;
      document.getElementById('timer').style.fontFamily = this.timerService.timerFont;
      document.getElementById('timer').style.fontSize = this.timerService.timerFontSize + 'px';
    });
  }

}

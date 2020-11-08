import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ElapsedtimerService } from './elapsedtimer.service';

@Component({
  selector: 'srr-elapsedtimer',
  template: `
    <h1 [ngStyle]="{'font-size': cmpFontSize}" id="timer"><span *ngIf="this.timerService.hours < 10">0</span>{{this.timerService.hours}}:<span *ngIf="this.timerService.minutes < 10">0</span>{{this.timerService.minutes}}:<span *ngIf="this.timerService.seconds < 10">0</span>{{this.timerService.seconds}}</h1>
  `,
  styles: [
  ],
  // providers: [ElapsedtimerService]
})
export class ElapsedtimerComponent implements OnInit, OnChanges {

  @Input() startNow: boolean;
  @Input() startDelay: number;
  @Input() timerExceedSettings: String[];
  @Input() timerColour: String;
  @Input() timerFont: String;
  @Input() timerFontSize: number;

  timeSubscription : Subscription;
  public cmpFontSize: String;
  // public cmpFont: string;
  // public cmpFontColour: string;
  
  private timeObservable: any;
  // hours = 0;
  // minutes = 0;
  // seconds = 0;
  private delay = 0;
  private exceededColour = null;

  // start = 1
  private exceededHour: any;
  private exceededMinutes: any;
  private exceededSeconds: any;
  private exceededTimeSet = 0;
  // timeSubscription: any;

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
    // this.setTimerExceedInvokeFunc()
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if (changes.timerFontSize) {
      this.cmpFontSize = `${changes.timerFontSize.currentValue}px`;
    }

    // if (changes.timerFont) {
    //   this.cmpFont = changes.timerFontSize.currentValue;
    // }

    // if (changes.timerColour) {
    //   this.cmpFontColour = changes.timerColour.currentValue;
    // }
    
  }

  //this will start the timer as soon as it gets called
  startNowFunc() {
    this.timeObservable = timer(0, 1000)
    this.timeSubscription = this.timeObservable.subscribe(x => {
      this.displayTimer()
    });
  }

  //this will start the timer after certain number of seconds
  delayStart(seconds) {
    this.timeObservable = timer(0, 1000)
    this.timeSubscription = this.timeObservable.subscribe(x => {
      setTimeout(() => { this.displayTimer() }, seconds * 1000)
    });
  }

  //this will get called inside the startNow(). this is where the actual timer function work
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

  //this will get the user input to set the timer to change the colour of text after a certian time
  // setTimerExceedColourChange(exceedColour, hour, minutes, seconds) {
  //   this.exceededTimeSet = 1
  //   this.exceededColour = exceedColour;
  //   this.exceededHour = hour;
  //   this.exceededMinutes = minutes;
  //   this.exceededSeconds = seconds
  // }

  //this is the actual function which will change the colour of the text after a certain moment
  private timerExceedColourChange() {
    this.exceededTimeSet = 0;
    if (this.timerService.hours >= this.timerService.exceededHour && this.timerService.minutes >= this.timerService.exceededMinutes && this.timerService.seconds >= this.timerService.exceededSeconds) {
      document.getElementById('timer').style.color = this.timerService.exceededColour
    }
  }

  //this will let the user to change the colour of the text
  changeColour(colour) {
    document.getElementById('timer').style.color = colour
  }

  //this will allow the user to change the font of the text
  changeFont(fontName) {
    document.getElementById('timer').style.fontFamily = fontName
  }

  //this will allow the user to change the size of the text
  changeFontSize(fontSize) {
    document.getElementById('timer').style.fontSize = fontSize + 'px';
  }

  //this will rest the timer to 0
  resetTimer() {
    this.timerService.resetTimerInvoke.subscribe(message => {
      console.log("resetTimer got called - component.ts constructor")
      this.timerService.start = 0;
      this.timerService.hours = 0;
      this.timerService.minutes = 0;
      this.timerService.seconds = 0;
      this.changeColour(this.timerService.timerColour)
      // this.timeSubscription.unsubscribe();
    });
  }

  //this will pause the timer
  pauseTimer() {
    this.timerService.pauseTimerInvoke.subscribe(message => {
      console.log("resetTimer got called - component.ts constructor")
      this.timerService.start = 0;
      this.timerService.hours = this.timerService.hours;
      this.timerService.minutes = this.timerService.minutes;
      this.timerService.seconds = this.timerService.seconds;
    });
    // this.start = 0;
  }

  //this will resume the timer
  resumeTimer() {
    this.timerService.resumeTimerInvoke.subscribe(message => {
      console.log("resetTimer got called - component.ts constructor")
      this.timerService.start = 1;
    });
  }

  startNowInvokeFunc() {
    this.timerService.startTimerInvoke.subscribe(message => {
      console.log("resetTimer got called - component.ts constructor")
      this.startNowFunc();
    });
  }

  delayStartInvokeFunc() {
    this.timerService.delayStartInvoke.subscribe(seconds => {
      console.log("resetTimer got called - component.ts constructor")
      this.timeObservable = timer(0, 1000)
      this.timeObservable.subscribe(x => {
        setTimeout(() => { this.displayTimer() }, seconds * 1000)
      });
    });
  }
  
  defaultSettingsInvokeFunc() {
    this.timerService.defaultSettingsInvoke.subscribe(message => {
      console.log("resetTimer got called - component.ts constructor")
      document.getElementById('timer').style.color = this.timerService.timerColour;
      document.getElementById('timer').style.fontFamily = this.timerService.timerFont;
      this.cmpFontSize = this.timerService.timerFontSize + 'px';
    });
  }

  // setTimerExceedInvokeFunc() {
  //   this.timerService.timerExceedInvoke.subscribe(array => {
  //     console.log("resetTimer got called - component.ts constructor")
  //     this.setTimerExceedColourChange(array[0], array[1], array[2], array[3]);
  //   });
  // }

}

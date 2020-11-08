import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElapsedtimerService {

  resetTimerInvoke: Subject<any> = new Subject();
  pauseTimerInvoke: Subject<any> = new Subject();
  resumeTimerInvoke: Subject<any> = new Subject();
  startTimerInvoke: Subject<any> = new Subject();
  delayStartInvoke: Subject<any> = new Subject();
  defaultSettingsInvoke: Subject<any> = new Subject();
  timerExceedInvoke: Subject<any> = new Subject();

  hours = 0;
  minutes = 0;
  seconds = 0;
  start = 1;
  timeReset = 0;
  alreadyStarted = 0;

  exceededColour = null; 
  exceededHour: any;
  exceededMinutes: any;
  exceededSeconds: any;
  exceededTimeSet = 0;
  
  timerColour = 'black'
  timerFont: any;
  timerFontSize: any;

  constructor() { }

  //this will return the current hour
  getCurrentHour(): number {
    return this.hours;
  }

  //this will return the current minute
  getCurrentMinute(): number {
    return this.minutes;
  }

  //this will return the current second
  getCurrentSecond(): number {
    return this.seconds;
  }

  //this will return the current time string
  getCurrentTime(): string {
    var currentTime: string;
    if (this.seconds < 10) {
      if (this.minutes < 10) {
        if (this.hours < 10) {
          currentTime = ("0" + this.hours + ":0" + this.minutes + ":0" + this.seconds).toString();
        }
        else {
          currentTime = this.hours + ":0" + this.minutes + ":0" + this.seconds;
        }
      }
      else {
        if (this.hours < 10) {
          currentTime = "0" + this.hours + ":" + this.minutes + ":0" + this.seconds;
        }
        else {
          currentTime = this.hours + ":" + this.minutes + ":0" + this.seconds;
        }
      }
    }
    else {
      if (this.minutes < 10) {
        if (this.hours < 10) {
          currentTime = "0" + this.hours + ":0" + this.minutes + ":" + this.seconds;
        }
        else {
          currentTime = this.hours + ":0" + this.minutes + ":" + this.seconds;
        }
      }
      else {
        if (this.hours < 10) {
          currentTime = "0" + this.hours + ":" + this.minutes + ":" + this.seconds;
        }
        else {
          currentTime = this.hours + ":" + this.minutes + ":" + this.seconds;
        }
      }
    }
    return currentTime;
  }

  //this will invoke the resetTimer method in component.ts
  resetTimer() {
    this.alreadyStarted = 1;
    this.resetTimerInvoke.next("resetNow")
  }

  //this will invoke the resetTimer method in component.ts
  pauseTimer() {
    this.pauseTimerInvoke.next("resetNow")
  }

  resumeTimer() {
    this.resumeTimerInvoke.next("resetNow")
  }

  startTimer() {
    if (this.alreadyStarted == 0) {
      this.alreadyStarted = 1;
      this.startTimerInvoke.next("resetNow")
    }
    else {
      this.resumeTimer();
    }
  }

  delayStart(seconds: number) {
    if (this.alreadyStarted == 0) {
      this.alreadyStarted = 1;
      this.delayStartInvoke.next(seconds)
    }
    else {
      setTimeout(()=>{this.resumeTimer()},seconds*1000)
    }    
  }

  setTimerExceedColourChange(exceedColour: string, hour: number, minutes: number, seconds: number) {
    this.exceededTimeSet = 1
    this.exceededColour = exceedColour;
    this.exceededHour = hour;
    this.exceededMinutes = minutes;
    this.exceededSeconds = seconds
  }

  setTimerDefaultSettings(fontName: string,fontColour: string,fontSize: string){
    this.timerFont = fontName;
    this.timerColour = fontColour;
    this.timerFontSize = fontSize;
    this.defaultSettingsInvoke.next("settings")
  }

}

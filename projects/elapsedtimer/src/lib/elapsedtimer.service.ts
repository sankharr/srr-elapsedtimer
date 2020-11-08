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
  // timerNormalColour = 'black';

  exceededColour = null; 
  exceededHour: any;
  exceededMinutes: any;
  exceededSeconds: any;
  exceededTimeSet = 0;
  // currentTime: String;
  
  timerColour = 'black'
  timerFont: any;
  timerFontSize: any;

  constructor() { }

  //this will return the current hour
  getCurrentHour() {
    return this.hours;
  }

  //this will return the current minute
  getCurrentMinute() {
    return this.minutes;
  }

  //this will return the current second
  getCurrentSecond() {
    return this.seconds;
  }

  //this will return the current time string
  getCurrentTime() {
    var currentTime: String;
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
    console.log('resetTimer function got called from elapsed.Service.ts')
    this.alreadyStarted = 1;
    this.resetTimerInvoke.next("resetNow")
  }

  pauseTimer() {
    console.log('pauseTimer function got called from elapsed.Service.ts')
    this.pauseTimerInvoke.next("resetNow")
  }

  resumeTimer() {
    console.log('resumeTimer function got called from elapsed.Service.ts')
    this.resumeTimerInvoke.next("resetNow")
  }

  startTimer() {
    if (this.alreadyStarted == 0) {
      this.alreadyStarted = 1;
      console.log('startTimer function got called from elapsed.Service.ts')
      this.startTimerInvoke.next("resetNow")
    }
    else {
      console.log('call from elsePart startTimer')
      this.resumeTimer();
    }
  }

  delayStart(seconds) {
    if (this.alreadyStarted == 0) {
      this.alreadyStarted = 1;
      console.log('delayTimer function got called from elapsed.Service.ts')
      this.delayStartInvoke.next(seconds)
    }
    else {
      console.log('call from elsePart delayStart')
      setTimeout(()=>{this.resumeTimer()},seconds*1000)
    }
    // console.log('delayTimer function got called from elapsed.Service.ts')
    // this.delayStartInvoke.next(seconds)
  }

  setTimerExceedColourChange(exceedColour, hour, minutes, seconds) {
    this.exceededTimeSet = 1
    this.exceededColour = exceedColour;
    this.exceededHour = hour;
    this.exceededMinutes = minutes;
    this.exceededSeconds = seconds
  }

  setTimerDefaultSettings(fontName,fontColour,fontSize){
    this.timerFont = fontName;
    this.timerColour = fontColour;
    this.timerFontSize = fontSize;
    this.defaultSettingsInvoke.next("settings")
  }

}

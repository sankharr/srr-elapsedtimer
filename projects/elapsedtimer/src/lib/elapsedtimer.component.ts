import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'srr-elapsedtimer',
  template: `
    <h1 id="timer"><span *ngIf="hours < 10">0</span>{{hours}}:<span *ngIf="minutes < 10">0</span>{{minutes}}:<span *ngIf="seconds < 10">0</span>{{seconds}}</h1>
  `,
  styles: [
  ]
})
export class ElapsedtimerComponent implements OnInit {

  private timeObservable: any;
  hours = 0;
  minutes = 0;
  seconds = 0;
  private delay = 0;
  private exceededColour = null;

  private start = 1
  private exceededHour: any;
  private exceededMinutes: any;
  private exceededSeconds: any;
  private exceededTimeSet = 0;

  constructor() { }

  ngOnInit(): void {
  }

  //this will start the timer as soon as it gets called
  startNow(){
    this.timeObservable = timer(0, 1000)
    this.timeObservable.subscribe(x => {
      this.displayTimer()
    });
  }

  //this will start the timer after certain number of seconds
  delayStart(seconds){
    this.timeObservable = timer(0, 1000)
    this.timeObservable.subscribe(x => {
      setTimeout(()=> {this.displayTimer()},seconds*1000)
    });
  }

  //this will get called inside the startNow(). this is where the actual timer function work
  private displayTimer() {
    if(this.start == 1){
      if (this.seconds < 59) {
        this.seconds = this.seconds + 1;
        if(this.exceededTimeSet == 1){
          this.timerExceedColourChange();
        }
      }
      else {
        if (this.minutes < 59) {
          this.minutes = this.minutes + 1;
          this.seconds = 0;
        }
        else {       
          this.hours = this.hours + 1;
          this.minutes = 0;
          this.seconds = 0;
        }
      }
    }    
  }
  
  //this will get the user input to set the timer to change the colour of text after a certian time
  setTimerExceedColourChange(exceedColour,hour,minutes,seconds){
    this.exceededTimeSet = 1
    this.exceededColour = exceedColour;
    this.exceededHour = hour;
    this.exceededMinutes = minutes;
    this.exceededSeconds = seconds
  }

  //this is the actual function which will change the colour of the text after a certain moment
  private timerExceedColourChange(){
    this.exceededTimeSet = 0;   
    if(this.hours >= this.exceededHour && this.minutes >= this.exceededMinutes && this.seconds >= this.exceededSeconds){
      document.getElementById('timer').style.color = this.exceededColour
    }
  }

  //this will let the user to change the colour of the text
  changeColour(colour){
    document.getElementById('timer').style.color = colour
  }

  //this will allow the user to change the font of the text
  changeFont(fontName){
    document.getElementById('timer').style.fontFamily = fontName
  }

  //this will allow the user to change the size of the text
  changeFontSize(fontSize){
    document.getElementById('timer').style.fontSize = fontSize+'px';
  }

  //this will rest the timer to 0
  resetTimer(){
    this.start = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  //this will pause the timer
  pauseTimer(){    
    this.start = 0;
  }

  //this will resume the timer
  resumeTimer(){    
    this.start = 1;
  }

  //this will return the current time
  getCurrentTime(){
    var currentTime:String;
    if(this.seconds < 10){
      if(this.minutes < 10){
        if(this.hours < 10){
          currentTime = ("0"+this.hours+":0"+this.minutes+":0"+this.seconds).toString();
        }
        else{
          currentTime =  this.hours+":0"+this.minutes+":0"+this.seconds;
        }
      }
      else{
        if(this.hours < 10){
          currentTime =  "0"+this.hours+":"+this.minutes+":0"+this.seconds;
        }
        else{
          currentTime =  this.hours+":"+this.minutes+":0"+this.seconds;
        }
      }
    }
    else{
      if(this.minutes < 10){
        if(this.hours < 10){
          currentTime =  "0"+this.hours+":0"+this.minutes+":"+this.seconds;
        }
        else{
          currentTime =  this.hours+":0"+this.minutes+":"+this.seconds;
        }
      }
      else{
        if(this.hours < 10){
          currentTime =  "0"+this.hours+":"+this.minutes+":"+this.seconds;
        }
        else{
          currentTime =  this.hours+":"+this.minutes+":"+this.seconds;
        }
      }
    }
    return currentTime;
  }

  //this will return the current hour
  getCurrentHour(){
    return this.hours;
  }

  //this will return the current minute
  getCurrentMinute(){
    return this.minutes;
  }

  //this will return the current second
  getCurrentSecond(){
    return this.seconds;
  }

}

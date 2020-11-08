import { Component, OnInit } from '@angular/core';
// import { time } from 'console';
// import * as timer from 'elapsedtimer'
import { ElapsedtimerService } from 'elapsedtimer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  timeNow: String;
  font = "tahoma"

  public myLibFontSize: number;

  constructor(
    private timer:ElapsedtimerService
  ) {
    this.myLibFontSize = 40;
    // this.timer.testFunc();
  }

  ngOnInit(){
    
    // timer.start
    // ElapsedtimerModule
    // this.timer.startTimer()
  }

  buttonClick(){
    this.timeNow = this.timer.getCurrentTime();
    console.log("Time now - ",this.timeNow," ",this.timer.getCurrentHour()," ",this.timer.getCurrentMinute()," ",this.timer.getCurrentSecond())
    // this.timer.resetTimer();
  }

  startNow(){
    this.timer.startTimer();
  }

  pauseTimer(){
    this.timer.pauseTimer();
  }

  resumeTimer(){
    this.timer.resumeTimer();
  }

  delayStart(){
    this.timer.delayStart(2);
  }

  setTimerExceedColourChange(){
    this.timer.setTimerExceedColourChange("red",0,0,2);
  }

  resetTimer(){
    this.timer.resetTimer();
  }

  setSettings(){
    this.timer.setTimerSettings('consolas','blue','70');
  }
}

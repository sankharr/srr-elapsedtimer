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
    private timerService:ElapsedtimerService
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
    this.timeNow = this.timerService.getCurrentTime();
    console.log("Time now - ",this.timeNow," ",this.timerService.getCurrentHour()," ",this.timerService.getCurrentMinute()," ",this.timerService.getCurrentSecond())
    // this.timerService.resetTimer();
  }

  startNow(){
    this.timerService.startTimer();
  }

  pauseTimer(){
    this.timerService.pauseTimer();
  }

  resumeTimer(){
    this.timerService.resumeTimer();
  }

  delayStart(){
    this.timerService.delayStart(2);
  }

  setTimerExceedColourChange(){
    this.timerService.setTimerExceedColourChange("red",0,0,2);
  }

  resetTimer(){
    this.timerService.resetTimer();
  }

  setSettings(){
    this.timerService.setTimerDefaultSettings('consolas','blue','70');
  }
}

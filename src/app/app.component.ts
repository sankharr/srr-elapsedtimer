import { Component, OnInit } from '@angular/core';
// import { time } from 'console';
// import * as timer from 'elapsedtimer'
// import { ElapsedtimerModule } from 'elapsedtimer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    // private timer:ElapsedtimerModule
  ) {

  }

  ngOnInit(){
    
    // timer.start
    // ElapsedtimerModule
    // this.timer.startTimer()
  }

  // title = 'srr-elapsedtimer';
}

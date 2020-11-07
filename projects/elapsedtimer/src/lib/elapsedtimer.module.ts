import { NgModule } from '@angular/core';
import { ElapsedtimerComponent } from './elapsedtimer.component';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [ElapsedtimerComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [ElapsedtimerComponent]
})
export class ElapsedtimerModule { }

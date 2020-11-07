import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElapsedtimerModule } from 'elapsedtimer'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElapsedtimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccordianComponent } from './accordian/accordian.component';

import {SafeHtmlPipe} from './accordian/accordian.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccordianComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

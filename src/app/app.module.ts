import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamplesComponent } from './examples/examples.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecondExComponent } from './second-ex/second-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamplesComponent,
    SecondExComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

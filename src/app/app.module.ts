import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeroeContainerComponent } from './heroe-container/heroe-container.component';
import { HeroeComponent } from './heroe/heroe.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroeContainerComponent,
    HeroeComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

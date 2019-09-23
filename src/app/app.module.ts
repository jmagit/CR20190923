import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main';
import { CommonAppModule } from './common-app';
import { IndraCoreModule } from 'src/indra-core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, MainModule, CommonAppModule, IndraCoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

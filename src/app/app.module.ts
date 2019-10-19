import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { PrimeModule } from './prime.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerModule } from './container/container.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     BrowserAnimationsModule,
    //NoopAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    PrimeModule,
    FormsModule,

    ContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

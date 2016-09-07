import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {App2Component} from './app2.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    Ng2BootstrapModule
  ],
  declarations: [
    AppComponent,
    App2Component
  ],
  bootstrap: [App2Component]
})

export class AppModule{}

import { ServerSocket } from './service-socket.service';
import { SocketUserComponent } from './socket-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {TimeAgoPipe} from 'time-ago-pipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SocketUserComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule 
  ],
  providers: [ServerSocket],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ServerSocket } from './service-socket.service';
import { SocketUserComponent } from './socket-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SocketUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServerSocket],
  bootstrap: [AppComponent]
})
export class AppModule { }

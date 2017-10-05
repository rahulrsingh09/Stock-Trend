import { element } from 'protractor';
import { ServerSocket } from './service-socket.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'socket-user',
  templateUrl: './SocketUser.component.html'
})
export class SocketUserComponent {
  private socketSubscription: Subscription

  current: any;
  prev: any;
  result : any = {};
  final :any[];
  constructor(private socket: ServerSocket) { }


ngOnInit() {
  this.socket.connect()

  //this.rows = [["msft", 42.849499763014954], ["ebr", 180.29808038888572], ["shld", 107.1179816830418];
  //this.rows = [["msft", 42.849499763014954];
  this.socketSubscription = this.socket.messages.subscribe((message) => {
    this.prev = this.current;
    //console.log("prev"+JSON.stringify(this.prev));
    if(this.prev){
      
      this.final = Object.keys(this.result).map((key) => {
        return [key, this.result[key],this.prev[key] - this.result[key] < 0 ? 'UP' : 'DOWN'];
      });

      for (let prevkey in this.prev){
        for (let currKey in this.current){
          if(prevkey == currKey){
            this.result[prevkey] = this.current[prevkey];             
          } else {
            this.result[prevkey] = this.prev[prevkey];
          }
        }
      }
    }

    let rows = JSON.parse(message);
    let objectify = rows.reduce((o,[k,v]) => (o[k]=v,o), {});
    this.current = objectify;
  })


  // send message to server, if the socket is not connected it will be sent
  // as soon as the connection becomes available thanks to QueueingSubject
  //this.socket.send('SEXY')
}

ngOnDestroy() {
  this.socketSubscription.unsubscribe()
}
}
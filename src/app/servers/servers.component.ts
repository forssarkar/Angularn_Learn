import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   allowNewServer : boolean = false ;
   serverCreationStatus : string = "No server created";
   noOfServer : number = 0;
   serverName = '';

  constructor() { 
    setTimeout (() => {
        this.allowNewServer= true
    },2000)

  }

  ngOnInit(): void {
  }

  onCreateServer = () => {
    this.serverCreationStatus = "Server Created"
    this.noOfServer =  this.noOfServer + 1
  }

  onUpdateServerName(event : Event){
    //console.log( (<HTMLInputElement>event.target).value)
    //console.log( event.target.value)
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

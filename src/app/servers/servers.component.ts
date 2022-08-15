import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   allowNewServer : boolean = false ;
   serverCreationStatus : string = "No server created !";
   noOfServer : number = 0;
   serverName = 'Test Server';
   serverCreated = false ;
   servers = ['Test Server1'] ;
  constructor() { 
    setTimeout (() => {
        this.allowNewServer= true
    },2000)

  }

  ngOnInit(): void {
  }

  onCreateServer = () => {
    this.serverCreationStatus = "Server was Created! Name is " + this.serverName  ;
    this.noOfServer =  this.noOfServer + 1 ;
    this.serverCreated = true ;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event : Event){
    //console.log( (<HTMLInputElement>event.target).value)
    //console.log( event.target.value)
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

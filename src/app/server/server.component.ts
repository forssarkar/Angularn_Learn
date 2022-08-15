import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponenet {
    title  ="Server" ;
    serverId : number = 10;
    serverStatus : string = "offline" ;

    constructor () {
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline" 
    }
    public getServerStatus =() => {
        return this.serverStatus ;
    }
    
    public getColor = () => {
        return this.serverStatus ==='offline' ? "red" : "green" ;
    }

    public getFontColor = () => {
        return this.serverStatus ==='offline' ? "yellow" : "white" ;
    }
} 
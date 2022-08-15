import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HMS_Angular';
  name = "Susanta" ;
  showDetails = false;
  logDetails :any[] = [];
    CallSomeLogic = () => {
    alert("hi")
  }

  // onDetailsToggle =() => {
  //   this.showDetails = !this.showDetails ;
  //   this.logDetails.push(this.logDetails.length + 1); 
  // }

  // Another Version for Index
    onDetailsToggle =() => {
    this.showDetails = !this.showDetails ;
    this.logDetails.push(new Date()); 
  }
}


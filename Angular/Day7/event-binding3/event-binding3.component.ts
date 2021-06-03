import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding3',
  templateUrl: './event-binding3.component.html',
  styleUrls: ['./event-binding3.component.css']
})
export class EventBinding3Component implements OnInit {

  result:number=0;
  name:string='';

  output:string='';

  constructor() { }

  ngOnInit() {
  }

  OnAddition(num1,num2){

    let n1=+num1;
    let n2=+num2;
    
     this.result= n1+n2;
     console.log("Result:: "+this.result);
  }

  onKeyUp(){
    console.log("Key up Event Occurs!!!.");
  }

  onKeyDown(){
    console.log("Key Down Event Occurs....");
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  OnEventClick(myevent){
    console.log(myevent);
    console.log("Value of Button is "+myevent.target.value);
  }

  onTemplate(input){
    console.log(input);
    console.log(input.value);
  }

  onTemplate1(myvalue){
    console.log("My Name is :: "+myvalue);
  }

  onChange(myinput){

console.log("Change event Occur!!!");
    myinput.style.background='red';

  }

}

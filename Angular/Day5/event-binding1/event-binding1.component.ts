import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding1',
  templateUrl: './event-binding1.component.html',
  styleUrls: ['./event-binding1.component.css']
})
export class EventBinding1Component implements OnInit {

  flag:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  onMyClick(){
    if(this.flag){
      console.log("Click Event Occur!!!");
      this.flag=false;
    }
    
  }

}

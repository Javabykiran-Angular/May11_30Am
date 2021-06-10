import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

   @Output() childStrEvent = new EventEmitter();

    @Output() childJsonEvent= new EventEmitter();
    
    @Output() childArrEvent= new EventEmitter();

    strData:string="Child Data";
    jsonObj={
      name:"Sumit",
      id:9,
      role:'Admin'
    };

    arrobj=[
      {
        name:"Sumit",
      id:9,
      role:'Admin'
      },
      {
        name:"Kiran",
      id:6,
      role:'Owner'
      },
      {
        name:"Spruha",
      id:3,
      role:'Developer'
      }
    ];


  constructor() { }

  ngOnInit() {
  }

  onClick(){
    // this.childStrEvent.emit(this.strData);
    this.childJsonEvent.emit(this.jsonObj);

    this.childArrEvent.emit(this.arrobj);
  }

}

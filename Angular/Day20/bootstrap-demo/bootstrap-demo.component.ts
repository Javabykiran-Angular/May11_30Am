import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-demo',
  templateUrl: './bootstrap-demo.component.html',
  styleUrls: ['./bootstrap-demo.component.css']
})
export class BootstrapDemoComponent implements OnInit {

  arrobj=[
    {
      id:1,
      name:"Sumit",
      status:true
    },
    {
      id:2,
      name:"Kiran",
      status:false
    },
    {
      id:3,
      name:"Spruha",
      status:true
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

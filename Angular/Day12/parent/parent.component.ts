import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  str:string="Send Data from Parent...";

  jsonobj={
    name:"sumit",
    id:9,
    status:true
  }

  clickdata:number;

  prodarr=[
    {
      name:'Polo',
      price:1000
    },
    {
      name:'Roadstar',
      price:2000
    },
    {
      name:'Allen Sholey',
      price:5000
    },
  ];

  ChildToParentStr:string='';

  ChildToParentJson={};

  ChildToParentArr=[];

  onSendData(){
    this.clickdata=9;
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {

  course:string[]=["Angular 8","React Js","Vue Js","Embber JS","JSP"];

  productArr=[
    {
      name:"Motorola",
      price:18000,
      quantity:1,
      des:"Good"
    },
    {
      name:"Samsung",
      price:25000,
      quantity:2,
      des:"better"
    },
    {
      name:"OnePlus",
      price:38000,
      quantity:1,
      des:"Best"
    },
    {
      name:"Realme",
      price:18000,
      quantity:1,
      des:"Good phone"
    }
  ];

  selected:string='';
  constructor() { }

  ngOnInit() {
  }
  onMouseOver(myitem){
    console.log("Mouse event Occur...");

    this.selected=myitem.name;
  }

  onMouseOut(){
    this.selected='';
  }

}

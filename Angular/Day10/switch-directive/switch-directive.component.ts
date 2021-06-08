import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-directive',
  templateUrl: './switch-directive.component.html',
  styleUrls: ['./switch-directive.component.css']
})
export class SwitchDirectiveComponent implements OnInit {

  mycolor:string='';
  constructor() { }

  ngOnInit() {
  }
  onClick(inputcolor){

    let tempcolor=(<string> inputcolor);
    this.mycolor=tempcolor.toLowerCase().trim();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-directive',
  templateUrl: './if-directive.component.html',
  styleUrls: ['./if-directive.component.css']
})
export class IfDirectiveComponent implements OnInit {

  rating:number=2;
  rating1:number=21;
  rating2:number=21;
  rating3:number=11;
  
  constructor() { }

  ngOnInit() {
  }

}

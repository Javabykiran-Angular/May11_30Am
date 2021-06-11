import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  str:string='Sumit raokhande Angular Trainer';
  num2:number=456.457892;

  mydate=new Date();
  constructor() { }

  ngOnInit() {
  }

}

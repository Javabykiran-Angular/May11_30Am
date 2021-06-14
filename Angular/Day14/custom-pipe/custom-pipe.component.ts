import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strdetail:string="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus placeat odio quo laboriosam reprehenderit id aliquid enim error dolorum? Dignissimos fuga ipsam voluptate velit temporibus officia cumque sequi aut rem.";
  
  constructor() { }

  ngOnInit() {
  }

}

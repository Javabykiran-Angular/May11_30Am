import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-parameter',
  templateUrl: './query-parameter.component.html',
  styleUrls: ['./query-parameter.component.css']
})
export class QueryParameterComponent implements OnInit {

  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {

    this.routes.queryParamMap
    .subscribe((queryparam)=>{
        console.log(`Name is ${queryparam.get("name")}
          Id is :: ${queryparam.get("id")}
          Status is :: ${queryparam.get("status")}
        `);
    })

  }

}

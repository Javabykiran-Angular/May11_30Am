import { Component, OnInit } from '@angular/core';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-backend-connection',
  templateUrl: './backend-connection.component.html',
  styleUrls: ['./backend-connection.component.css']
})
export class BackendConnectionComponent implements OnInit {

  constructor(private service:MyhttpService) { }

  ngOnInit() {
    this.service.getPost()
    .subscribe((response)=>{
      console.log(response);
    })
  }

}

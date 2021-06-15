import { Component, OnInit } from '@angular/core';

import { CourseService } from './../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course=[];

  constructor(private service:CourseService) { 
    // let service=new CourseService();
    // this.course=service.getCourse();
  }

  ngOnInit() {
    this.course=this.service.getCourse();
  }

}

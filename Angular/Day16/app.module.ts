import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { EmployeeComponent } from './employee/employee.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBinding1Component } from './event-binding1/event-binding1.component';
import { EventBinding2Component } from './event-binding2/event-binding2.component';
import { EventBinding3Component } from './event-binding3/event-binding3.component';
import { FormsModule } from '@angular/forms';
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { InbuildPipeComponent } from './inbuild-pipe/inbuild-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import {SummaryPipe} from './summary.pipe';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
import { BackendConnectionComponent } from './backend-connection/backend-connection.component';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    EventBinding1Component,
    EventBinding2Component,
    EventBinding3Component,
    IfDirectiveComponent,
    ForDirectiveComponent,
    SwitchDirectiveComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    InbuildPipeComponent,
    CustomPipeComponent,
    SummaryPipe,
    CourseComponent,
    BackendConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

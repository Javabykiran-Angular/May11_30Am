import { Component, OnInit } from '@angular/core';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-backend-connection',
  templateUrl: './backend-connection.component.html',
  styleUrls: ['./backend-connection.component.css']
})
export class BackendConnectionComponent implements OnInit {

  postArr:any[]=[];
  id:string='';
  title:string='';
  body:string='';
  ishidden:boolean=true;

  constructor(private service:MyhttpService) { }

  ngOnInit() {
    this.service.getPost()
    .subscribe((response)=>{
      console.log(response);
      this.postArr=(<any>response);
    },(error)=>{
      alert("Server is Not available...");
    })
  }

  onSubmit(mytitle,mybody){
      let obj={
        title:mytitle.value,
        body:mybody.value
      }

      this.service.PostData(obj)
      .subscribe((response)=>{
          console.log(response);
      })

  }

  OnEdit(myitem){
      this.id=myitem.id;
      this.title=myitem.title;
      this.body=myitem.body;
      this.ishidden=false;
  }

  OnUpdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.UpdateData(obj)
    .subscribe((response)=>{
      console.log(response);
    })


  }

  onDelete(id){

    this.service.DeleteData(id)
    .subscribe((response)=>{
      console.log(response);
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks:any;
  action:string='add'
  row:any;
  constructor(private http:ApiServiceService) { }

  ngOnInit(): void {
   
    this.http.getTasks().subscribe((response: any) => {
      //localStorage.setItem('auth_token',response);
      this.tasks=response.task;
    });
    
  }
  addRow(){
    this.action='Add'
    this.row=null
  }
  editRow(ob:any){
    this.action='Edit'
    this.row=ob
  }
}

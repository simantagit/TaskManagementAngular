import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { TaskStateService } from 'src/app/service/task-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks:any;
  action:string='add'
  row:any;
  screenMsg:string='';
  task$:Observable<any|null>;
  constructor(private http:ApiServiceService,private taskStService:TaskStateService) { 
    this.task$=taskStService.task$
  }
  ngOnChanges(){
    alert('111')
  }

  ngOnInit(): void {
    //let task=this.taskStService.getTask
    this.getTask();
   
}
  getTask(){
    this.taskStService.task$.subscribe(task => {
      if(task!=null){
        this.tasks=task
      }
    else{
        this.http.getTasks().subscribe((response: any) => {
        this.tasks=response.task;
        this.taskStService.setTask()
      });
    }
    });
    // let task=this.taskStService.getTask()
    // this.http.getTasks().subscribe((response: any) => {
    //   //localStorage.setItem('auth_token',response);
    //   this.tasks=response.task;
    //   this.taskStService.setTask()
    // });
    
  }
  addRow(){
    this.action='Add'
    this.row=null
    this.getTask();
  }
  editRow(ob:any){
    this.action='Edit'
    this.row=ob
    this.getTask();
  }

  deleteRow(id:number){
    this.http.deleteTask(id).subscribe((response: any) => {
      this.taskStService.setTask()
          this.screenMsg=response.message
    });
  }
}

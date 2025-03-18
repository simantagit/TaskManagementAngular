import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class TaskStateService {

  constructor(private http:ApiServiceService) { }

  private taskSubject= new BehaviorSubject<any|null>(null);
  task$= this.taskSubject.asObservable();

  setTask(){
    this.http.getTasks().subscribe((response: any) => {
      this.task$=response.task;
      this.taskSubject.next(response.task)
      console.log("task:::::",this.task$)
    });
   
  }

  clearTask(){
    this.taskSubject.next(null);
  }

  getTask(){
    return this.taskSubject.getValue();
  }
}

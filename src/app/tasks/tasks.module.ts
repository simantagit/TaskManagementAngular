import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorServiceService } from '../service/auth-interceptor-service.service';


@NgModule({
  declarations: [
    TasksComponent,
    TaskListComponent,
    TaskAddComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
        ReactiveFormsModule
  ],
  providers: [
    {
     provide: HTTP_INTERCEPTORS,
     useClass: AuthInterceptorServiceService,
     multi: true
    }
   ]
})
export class TasksModule { }

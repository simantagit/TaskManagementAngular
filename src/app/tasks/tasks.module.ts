import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
  ]
})
export class TasksModule { }

import { Component, Input, OnInit } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { TASK } from './tasks.model';
import { NewTaskData, type Task } from './task/task.model'
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent implements OnInit{

  @Input() name?: string;
  @Input() userid?: string;

  ngOnInit(): void {
    console.log("get name: " + this.name)
  }
  
  isAddingTasks: boolean = false

  tasks = TASK

  //the task label did not show
  get selectedUsertasks(){
    return this.tasks.filter((task) => task.userId === this.userid );
  }

  onCancelAddTask() {
    this.isAddingTasks = false
  }

  onStartAddTask() {
    this.isAddingTasks = true
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.push({
      id: taskData.id,
      userId: this.userid ?? '',
      title: taskData.title,
      summary: taskData.summary
    })
    console.log(taskData)
    this.isAddingTasks = true
  }
 
  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id ! == id)
  }

}

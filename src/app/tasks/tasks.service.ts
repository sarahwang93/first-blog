import { Injectable } from '@angular/core';
import { TASK } from './tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks_data = TASK

  constructor() { }

  getTasksbyId(id:String) {
      return this.tasks_data.filter(task => task.id === id)
  }

  addTask(task: {id: string, userId: string, title: string, summary: string}, userId: string) {
    this.tasks_data.push(task)
  }

  removeTask(id: string) {
    this.tasks_data = this.tasks_data.filter(task => task.id !== id)
    console.log(this.tasks_data)
  }
}

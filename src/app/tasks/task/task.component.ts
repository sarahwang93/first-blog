import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
    @Input() name: string|undefined
    @Input({ required:true }) task!: Task
    @Output() complete = new EventEmitter<string>();

    private tasksService = inject(TasksService)

    onCompleteTask(id: string) {
       console.log('Task completed: ' + id)
       this.tasksService.removeTask(this.task.id)
    }
}


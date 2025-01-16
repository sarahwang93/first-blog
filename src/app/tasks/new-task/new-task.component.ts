import { Component, Output, EventEmitter, signal, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  enteredId = ''
  enteredUserId = ''
  enteredTitle = ''
  enteredSummary = ''

  private tasksService = inject(TasksService)

  @Input({required: true}) userId!: string
  @Output() cancel = new EventEmitter<void>()
  @Output() close = new EventEmitter<void>()
  @Output() add = new EventEmitter<{
    id: string;
    userId: string;
    title: string;
    summary: string; 
  }>();

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.userId = this.enteredUserId
    this.tasksService.addTask(
      {
        id:this.enteredId,
        userId: this.enteredUserId,
        title: this.enteredTitle,
        summary: this.enteredSummary
      }, this.enteredUserId 
    )
  
      /*
    this.add.emit(
      { 
        id: this.enteredId,
        userId: this.enteredUserId,
        title: this.enteredTitle,
        summary: this.enteredSummary
       
      }
    )*/
    this.cancel.emit();
  }

}

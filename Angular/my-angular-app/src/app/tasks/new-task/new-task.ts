import { Component , Input, Output , inject} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from './new-task.model';
import { TasksService } from '../TasksService';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({required:true}) userId! :string
  @Output() close = new EventEmitter<void>();
  enterdTitle = '';
  enteredSummary ='';
  enteredDate='';
  private tasksService = inject(TasksService)

  onCancel(){
    this.close.emit();
  }
  onSubmit(){
    this.tasksService.addTask({
      title: this.enterdTitle , 
      summary :this.enteredSummary , 
      date:this.enteredDate
    },this.userId);
    this.close.emit()
  }
}

import { Component , Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>() ; 
  @Output() add = new EventEmitter<newTaskData>() ; 
  enterdTitle = '';
  enteredSummary ='';
  enteredDate='';
  onCancel(){
    this.cancel.emit();
  }
  onSubmit(){
    this.add.emit({
      title :this.enterdTitle ,
      summary : this.enteredSummary , 
      date : this.enteredDate
    })
  }
}

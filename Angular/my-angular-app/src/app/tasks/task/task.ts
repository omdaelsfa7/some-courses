import { Component , Input } from '@angular/core';

type task={
  id :string ,
  userId : string ,
  title: string , 
  summary: string, 
  dueDate: string 
}
@Component({
  selector: 'app-task',
  imports: [],
  standalone:true ,   
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input() name? :string
  @Input({required :true }) task ?: task
}

import { Component , Input  } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { Task } from "./task/task";
import { dummyTasks } from './dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  standalone:true ,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required : true}) userId ?:string | null;
  name?: string  
  tasks = dummyTasks
  ngOnChanges() {
    if (this.userId) {
      const user = DUMMY_USERS.find(u => u.id === this.userId);
      this.name = user?.name;
    }
  }
  get selectedUserTasks(){
    return this.tasks.filter((task)=> task.userId === this.userId );
  }
}

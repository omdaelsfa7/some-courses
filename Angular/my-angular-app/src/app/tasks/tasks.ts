import { Component , Input  } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { Task } from "./task/task";
import { dummyTasks } from './dummy-tasks';
import { NewTask } from "./new-task/new-task";
import {newTaskData} from "../tasks/new-task/new-task.model"

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  standalone:true ,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required : true}) userId ?:string | null;
  name?: string  
  isAddingTask = false ; 
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
  onCompleteTask(id :string){
    this.tasks = this.tasks.filter(u => u.id !== id)
  }
  onStartAddTask(){
    this.isAddingTask = true ;
  }
  onCancelTask(){
    this.isAddingTask = false ;
  }
  onAddTask(taskData: newTaskData){
    this.tasks.push({
      id: new Date().getTime.toString() ,
      userId : this.userId! ,  
      title : taskData.title ,
      summary : taskData.summary , 
      dueDate : taskData.date 
    })
    this.isAddingTask = false ; 
  }
}

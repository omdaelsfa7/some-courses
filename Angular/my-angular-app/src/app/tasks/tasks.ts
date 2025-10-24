import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { Task } from './task/task';
import { dummyTasks } from './dummy-tasks';
import { NewTask } from './new-task/new-task';
import { TasksService } from './TasksService';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  standalone: true,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  name?: string;
  isAddingTask = false;
  tasks = dummyTasks;
  constructor(private tasksService: TasksService) {}
  ngOnChanges() {
    if (this.userId) {
      const user = DUMMY_USERS.find((u) => u.id === this.userId);
      this.name = user?.name;
    }
  }
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId!);
  }
  
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseTask() {
    this.isAddingTask = false;
  }
}

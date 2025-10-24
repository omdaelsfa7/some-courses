import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TasksService } from '../TasksService';

type task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
};
@Component({
  selector: 'app-task',
  imports: [DatePipe],
  standalone: true,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input() name?: string;
  @Input({ required: true }) task!: task;
  private tasksService =inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id)
  }
}

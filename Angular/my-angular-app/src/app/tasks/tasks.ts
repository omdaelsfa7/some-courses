import { Component , Input  } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { Task } from "./task/task";

@Component({
  selector: 'app-tasks',
  imports: [Task],
  standalone:true ,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() id ?:string | null;
  name?: string  

  ngOnChanges() {
    if (this.id) {
      const user = DUMMY_USERS.find(u => u.id === this.id);
      this.name = user?.name;
    }
  }
}

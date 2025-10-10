import { Component , Input  } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

@Component({
  selector: 'app-tasks',
  imports: [],
  standalone:true ,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required : true }) id! :string | null;
  name: string | null = null;

  ngOnChanges() {
    if (this.id) {
      const user = DUMMY_USERS.find(u => u.id === this.id);
      this.name = user ? user.name : null;
    }
  }
}

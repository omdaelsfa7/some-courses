import { Component, signal } from '@angular/core';
import { headerComponent } from './header/header.component';
import { User } from "./user/user";
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './dummy-user';

@Component({
  selector: 'app-root',
  imports: [headerComponent, User , Tasks],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-angular-app');
  users=DUMMY_USERS;
  selectedUserId :string |null = null 
  selectedUsername :string |null = null

  onSelectUser(id : string){
    console.log("userid:" + id);
    this.selectedUserId = id;
  }
}

import { Component, signal } from '@angular/core';
import { headerComponent } from './header/header.component';
import { UserComponent } from './user/user';
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './dummy-user';

@Component({
  selector: 'app-root',
  imports: [headerComponent, UserComponent, Tasks],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('my-angular-app');
  users = DUMMY_USERS;
  selectedUserId?: string;

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}

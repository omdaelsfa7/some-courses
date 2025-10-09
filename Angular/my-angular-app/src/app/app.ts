import { Component, signal } from '@angular/core';
import { headerComponent } from './header/header.component';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-user';

@Component({
  selector: 'app-root',
  imports: [headerComponent, User],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-angular-app');
  users=DUMMY_USERS;
}

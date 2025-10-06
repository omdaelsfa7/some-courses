import { Component, signal } from '@angular/core';
import { headerComponent } from './header.component';

@Component({
  selector: 'app-root',
  imports: [headerComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-angular-app');
}

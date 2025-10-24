import { Component, Input, Output, EventEmitter, output } from '@angular/core';

type User = {
  id: string;
  avatar: string;
  name: string;
};
@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({required :true}) selected! : boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

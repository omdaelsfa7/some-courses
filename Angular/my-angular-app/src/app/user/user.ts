import { Component, Input, Output ,EventEmitter ,output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}

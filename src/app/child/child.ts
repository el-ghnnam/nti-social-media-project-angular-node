import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from '../services/user'; // Adjust path as needed
import { Iuser } from '../server/models/models';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrls: ['./child.css'],
})
export class Child implements OnChanges {
  @Input() username: string = '';
  userData?: Iuser;

  constructor(private userService: UserService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['username'] && this.username) {
      this.userService.getUserByUsername(this.username).subscribe({
        next: (user) => {
          this.userData = user;
        },
        error: (err) => {
          console.error('Failed to load user by username', err);
        },
      });
    }
  }

  get formattedDate(): string | Date {
    return this.userData?.date || new Date();
  }
}

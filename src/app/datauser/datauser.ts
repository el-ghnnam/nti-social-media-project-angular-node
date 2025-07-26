import { Component, Input, OnInit } from '@angular/core';
import { Iuser } from '../server/models/models';
import { UserService } from '../services/user';

@Component({
  selector: 'app-datauser',
  standalone: false,
  templateUrl: '../datauser/datauser.html',
  styleUrls: ['../datauser/datauser.css'],
})
export class DateUser implements OnInit {
  @Input() userid!: string;
  @Input() date_create!: string | Date;

  user!: Iuser;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserById(this.userid).subscribe({
      next: (u) => (this.user = u),
      error: (err) => console.error('Failed to load user:', err),
    });
  }
}

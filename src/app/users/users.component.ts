import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  currentUser: User | null = null;
  errorMessage = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAll().subscribe({
      next: (data) => this.users = data,
      error: (error) => this.errorMessage = 'Error loading users: ' + error.message
    });
  }

  selectUser(user: User): void {
    this.currentUser = { ...user };
  }

  updateUser(user: User): void {
    this.userService.update(user.id, user).subscribe({
      next: () => this.getUsers(),
      error: (error) => this.errorMessage = 'Error updating user: ' + error.message
    });
  }
}

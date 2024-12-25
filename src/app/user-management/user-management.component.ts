import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'admin' }
  ];
  currentUser: User | null = null;
  errorMessage: string | null = null;

  selectUser(user: User): void {
    this.currentUser = user;
  }

  updateUser(user: User): void {
    // Update user logic here
    console.log('User updated', user);
  }
}
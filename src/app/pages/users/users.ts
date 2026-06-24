import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
  
})
export class Users {

  users: any[] = [];
  searchText = '';

  constructor(private userService: UserService) {

  console.log('Users component loaded');

  this.userService.getUsers().subscribe(
    (data: any) => {
      console.log('API DATA:', data);
      this.users = data;
    },
    (error) => {
      console.error('API ERROR:', error);
    }
  );

}

}
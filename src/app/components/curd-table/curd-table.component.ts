// import { Component } from '@angular/core';
// import { UserService } from '../../services/user.service';
// import { User } from '../../models/user.model';

// @Component({
//   selector: 'app-curd-table',
//   templateUrl: './curd-table.component.html',
//   styleUrls: ['./curd-table.component.css']
// })
// export class CurdTableComponent {
//   users: User[] = [];
//   filteredUsers: User[] = []; // New array to hold filtered users

//   constructor(private userService: UserService) {
//     this.users = this.userService.getUsers();
//     this.filteredUsers = [...this.users]; // Initialize filtered users with all users
//   }

//   // Method to filter users by name
//   filterByName(searchValue: string) {
//     if (searchValue.trim() === '') {
//       // If search value is empty, show all users
//       this.filteredUsers = [...this.users];
//     } else {
//       // Filter users based on search value
//       this.filteredUsers = this.users.filter(user =>
//         user.name.toLowerCase().includes(searchValue.toLowerCase())
//       );
//     }
//   }

//   deleteUser(index: number) {
//     this.userService.deleteUser(index);
//   }
// }




import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-curd-table',
  templateUrl: './curd-table.component.html',
  styleUrls: ['./curd-table.component.css']
})
export class CurdTableComponent {
  users: User[] = [];
  filteredUsers: User[] = [];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
    this.filteredUsers = [...this.users];
  }

  filterByName(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    if (searchValue.trim() === '') {
      this.filteredUsers = [...this.users];
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  }

  deleteUser(index: number) {
    this.userService.deleteUser(index);
  }
}


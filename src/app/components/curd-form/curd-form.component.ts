import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-crud-form',
  templateUrl: './curd-form.component.html',
  styleUrls: ['./curd-form.component.css']
})
export class CurdFormComponent {
  user: User = {
    name: '',
    email: '',
    age: '',
    address: ''
  };

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.addUser(this.user);
    this.user = { name: '', email: '', age: '', address: '' };
  }
}

import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList: User[] = [];

  constructor() { }

  addUser(user: User) {
    this.userList.push(user);
    this.saveUserList();
  }

  updateUser(index: number, user: User) {
    this.userList[index] = user;
    this.saveUserList();
  }

  deleteUser(index: number) {
    this.userList.splice(index, 1);
    this.saveUserList();
  }

  getUsers(): User[] {
    const storedUsers = localStorage.getItem('userList');
    if (storedUsers) {
      this.userList = JSON.parse(storedUsers);
    }
    return this.userList;
  }

  private saveUserList() {
    localStorage.setItem('userList', JSON.stringify(this.userList));
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [
    new User(1, "sa", "Systems", "Admin"),
    new User(2, "rv", "Systems", "Reviewer"),
    new User(3, "us", "Systems", "User"),
    new User(4, "us1", "Systems", "User1")
  ];

  constructor(
    private usrsvc: UserService
  ) { }

  ngOnInit(): void {
    this.usrsvc.list().subscribe(
      res => {
        console.debug("Users:", res);
        this.users = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}

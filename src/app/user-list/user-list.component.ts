import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../models/User.model";
import {Subscription} from "rxjs";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

// We do not create a singleUser component to be faster
export class UserListComponent implements OnInit,OnDestroy {

  users: User[] = [];
  userSubscription: Subscription | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }
  ngOnDestroy() {
    this.userSubscription?.unsubscribe();
  }

}

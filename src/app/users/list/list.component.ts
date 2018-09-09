import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { map } from 'rxjs/operators';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  users: User[] =[];

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .pipe(
      map( response => response['data'])
    )
    .subscribe(users => {
      this.users = users;
    });
  }

}

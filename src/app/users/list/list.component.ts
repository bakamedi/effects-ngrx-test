import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';

import * as usersActions from '../../store/actions'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  users: User[] =[];
  loading: boolean;
  error:any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('users').subscribe( response => {
      this.users = response.users;
      this.loading = response.loading;
      this.error = response.error;
    });
    this.store.dispatch(new usersActions.LoadUsers());
  }

}

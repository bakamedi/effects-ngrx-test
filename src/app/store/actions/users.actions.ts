import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD_USERS = '[Users] Load users';
export const LOAD_USERS_FAIL = '[Users] Load users FAIL';
export const LOAD_USERS_SUCCESS = '[Users] Load users  SUCCESS';


export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;
  constructor( public payload: any){
    
  }
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor( public users: User[]){
  }
}

export type ActionUsers = LoadUsers | LoadUsersFail | LoadUsersSuccess ;

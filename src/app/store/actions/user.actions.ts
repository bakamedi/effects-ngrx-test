import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD_USER = '[User] Load user';
export const LOAD_USER_FAIL = '[User] Load user FAIL';
export const LOAD_USER_SUCCESS = '[User] Load user  SUCCESS';


export class LoadUser implements Action {
  readonly type = LOAD_USER;
  constructor(public id: string){}
}

export class LoadUserFail implements Action {
  readonly type = LOAD_USER_FAIL;
  constructor( public payload: any){
    
  }
}

export class LoadUserSuccess implements Action {
  readonly type = LOAD_USER_SUCCESS;
  constructor( public user: User){
  }
}

export type ActionUser = LoadUser | LoadUserFail | LoadUserSuccess ;

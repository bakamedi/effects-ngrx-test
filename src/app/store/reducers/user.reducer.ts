import { User } from "../../models/user.model";
import * as fromUser from '../actions'; 

export interface UserState {
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initState: UserState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function userReducer( state = initState, action: fromUser.ActionUser): UserState {

  switch (action.type) {
    case fromUser.LOAD_USER:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case fromUser.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user:  action.user
      };
    
    case fromUser.LOAD_USER_FAIL:
      return {
        ...state,
        loaded: false,
        loading:false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };
  
    default:
      return state
  }

}

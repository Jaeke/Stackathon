import axios from 'axios'
import { BASE_URL } from '../../../utils'

// ACTION TYPES
export interface UserModel {
  firstName: string;
  lastName: string;
  subscription: string;
  token: string;
}

export interface LoginAction {
  readonly type: 'ON_LOGIN';
  payload: UserModel;
}



export interface ErrorAction {
  readonly type: 'ON_ERROR';
  payload: any
}

export type UserAction = LoginAction | ErrorAction;

// DISPATCH ACTION
export const onLogin = (email: string, password: string) => {

}

import { IUser } from "../user/types";

export interface RegisterForm {
  email: string;
  password: string;
  passwordCheck: string;
  username: string;
}

export interface RegisterData {
  email: string;
  password: string;
  username: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResult {
  user: IUser;
  accessToken: string;
}

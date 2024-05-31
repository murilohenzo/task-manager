export interface UserPost {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface UserNameResponse extends UserPost {
  id: number;
  referenceId: string;
}

export interface UserPostResponse {
  message: string;
  user: UserPost;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserLoginResponse {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  token_type: string;
  session_state: string;
  scope: string;
}

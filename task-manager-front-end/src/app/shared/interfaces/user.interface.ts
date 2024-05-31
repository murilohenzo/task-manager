export interface User {
  // TODO: verificar esse id (SE NECESSÁRIO)
  id?: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
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

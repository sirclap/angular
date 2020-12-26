import { User } from './user.model';
import jwt_decode from 'jwt-decode';

export class Session {
  user: User;
  accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
    this.user = new User(jwt_decode(accessToken));
  }
}

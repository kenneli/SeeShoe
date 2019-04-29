import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: Http) { }
  // host = 'https://seeshoe-server.herokuapp.com';
  host = 'http://localhost:3000';

  login(username, password) {
    return this.http.post(`${this.host}/api/user/login`, {
      username,
      password
    });
  }

  createAccount(name, username, password) {
    return this.http.post(`${this.host}/api/user/create-account`, {
      name,
      username,
      password,
      level: 'buyer'
    });
  }
}

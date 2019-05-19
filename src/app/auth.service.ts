import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: Http) { }
  // host = 'https://seeshoe-server.herokuapp.com';
  host = 'https://seeshoe-server.herokuapp.com';

  login(email, password) {
    return this.http.post(`${this.host}/api/user/login`, {
      email,
      password
    });
  }

  createAccount(nama, email, password) {
    return this.http.post(`${this.host}/api/user/create-account`, {
      nama,
      email,
      password,
      level: 'buyer'
    });
  }
}

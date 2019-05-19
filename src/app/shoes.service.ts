import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  // host = 'https://seeshoe-server.herokuapp.com';
  host = 'https://seeshoe-server.herokuapp.com';

  constructor(public http: Http) { }

  getShoes(limit) {
    return this.http.get(`${this.host}/api/shoes?limit=${limit}`);
  }

  getShoesDetail(id) {
    return this.http.get(`${this.host}/api/shoes/${id}`);
  }
}

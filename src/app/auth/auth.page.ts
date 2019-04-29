import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(public router: Router, public storage: Storage) { }

  async ngOnInit() {
    const isLoggedIn = await this.storage.get('isLoggedIn');
    if (isLoggedIn) {
      return setTimeout(() => {
        this.router.navigate(['home'], { replaceUrl: true });
      }, 500);
    }
    return setTimeout(() => {
      this.router.navigate(['login'], { replaceUrl: true });
    }, 500);
  }

}

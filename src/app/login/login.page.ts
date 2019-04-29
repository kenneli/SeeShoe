import { AuthService } from './../auth.service';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;

  constructor(public router: Router, public storage: Storage, public authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(async response => {
      if (response) {
        await this.storage.set('isLoggedIn', response);
        return setTimeout(() => {
          this.router.navigate(['home'], { replaceUrl: true });
        }, 500);
      }
    });
  }

  goToCreate() {
    setTimeout(() => {
      this.router.navigate(['create-account']);
    }, 500);
  }

}

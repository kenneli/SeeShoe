import { Storage } from '@ionic/storage';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  name: any;
  username: any;
  password: any;

  constructor(public router: Router, public storage: Storage, public authService: AuthService) { }

  ngOnInit() {
  }

  onCreateAccount() {
    this.authService.createAccount(this.name, this.username, this.password).subscribe(async response => {
      if (response) {
        this.onLogin();
      }
    });
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

  goToLogin() {
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 500);
  }

}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart: any;

  constructor(public router: Router, public storage: Storage, public location: Location) {
  }

  ngOnInit() {
    this.getCart()
    // this.storage.remove('cart');
  }

  goBack() {
    this.location.back();
  }

  async deleteCart(item) {
    const cart = await this.storage.get('cart');
    const newCart = JSON.parse(cart).bookmark.filter(ele => ele.id !== item.id);
    const saveCart = {
      bookmark: newCart
    };
    await this.storage.set('cart', JSON.stringify(saveCart));
    this.getCart();
  }

  async getCart() {
    const cart = await this.storage.get('cart');
    if (cart) {
      const res = JSON.parse(cart).bookmark;
      const newRes = res.map(el => {
        const name = `${el.name.slice(0, 14)} ...`;
        console.log(name);
        return {
          ...el,
          name: name
        };
      });
      this.cart = newRes;
    }
  }
}

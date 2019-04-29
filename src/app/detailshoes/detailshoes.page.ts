import { Location } from '@angular/common';
import { ShoesService } from './../shoes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-detailshoes',
  templateUrl: './detailshoes.page.html',
  styleUrls: ['./detailshoes.page.scss'],
})
export class DetailshoesPage implements OnInit {
  shoes = {
    id: '',
    name: '',
    description: '',
    images: [],
    price: '',
    quantity: '',
    item_code: ''
  };
  isLoading = true;
  id: any;

  constructor(public shoesService: ShoesService, public storage: Storage, public params: ActivatedRoute, public location: Location) {
    this.id = this.params.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.shoesService.getShoesDetail(this.id).subscribe(response => {
      const newShoes = response.json();
      const img = newShoes.images.split(',');
      const newImg = img.map(el => {
        return el.trim();
      });
      const list = {
        id: newShoes.id,
        name: newShoes.name,
        description: newShoes.description,
        images: newImg,
        price: newShoes.price,
        quantity: newShoes.quantity,
        item_code: newShoes.item_code
      };
      this.shoes = list;
      this.isLoading = false;
    });
  }

  async addToCart() {
    let cart = await this.storage.get('cart');
    if (cart) {
      const newCart = JSON.parse(cart);
      newCart.bookmark.push(this.shoes);
      return await this.storage.set('cart', JSON.stringify(newCart));
    }
    cart = {
      bookmark: [this.shoes]
    };
    return await this.storage.set('cart', JSON.stringify(cart));
  }

  goBack() {
    this.location.back();
  }
}

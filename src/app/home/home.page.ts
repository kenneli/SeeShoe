import { ShoesService } from './../shoes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  shoesList: any;
  isLoading = true;

  constructor(public router: Router, public shoesProvider: ShoesService) { }

  goToCart() {
    this.router.navigate(['cart']);
  }

  goToDetail(params) {
    this.router.navigate([`detailshoes/${params}`]);
  }

  goToAllShoes() {
    this.router.navigate(['allshoes']);
  }

  ngOnInit() {
    this.shoesProvider.getShoes(4).subscribe(response => {
      const res = response.json();
      const newShoesList = res.map(el => {
        const name = `${el.name.slice(0, 14)} ...`;
        const img = el.images.split(',');
        return {
          ...el,
          name: name,
          images: img
        };
      });
      this.shoesList = newShoesList;
      this.isLoading = false;
    });
  }
}

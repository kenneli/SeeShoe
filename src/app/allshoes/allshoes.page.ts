import { ShoesService } from './../shoes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-allshoes',
  templateUrl: './allshoes.page.html',
  styleUrls: ['./allshoes.page.scss'],
})
export class AllshoesPage implements OnInit {
  shoesList: any;
  isLoading = true;
  search: any;
  oldShoesList: any;

  constructor(public router: Router, public shoesProvider: ShoesService, public location: Location) { }

  goToDetail(params) {
    this.router.navigate([`detailshoes/${params}`]);
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

  onSearch() {
    if (!this.oldShoesList) {
      this.oldShoesList = this.shoesList;
    } else {
      this.shoesList = this.oldShoesList;
    }
    const newShoesList = this.shoesList.filter(item => {
      return item.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0;
    });
    this.shoesList = newShoesList;
  }

  goBack() {
    this.location.back();
  }
}

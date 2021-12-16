import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../_services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: any[];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(): void {
    this.productsService.getProducts().subscribe(data =>{
      this.products = data;
    })
  }

}

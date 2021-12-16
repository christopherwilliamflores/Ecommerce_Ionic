import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.page.html',
  styleUrls: ['./products-view.page.scss'],
})
export class ProductsViewPage implements OnInit {
  product: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        const product_id = data.get('product_id');

        this.productService.getProductById(product_id).subscribe(
          response => {
            console.log(response);
            this.product = response
          },
          error => {
            console.error(error);
          }
        )
      }
    );
  }

}

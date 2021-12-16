import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.page.html',
  styleUrls: ['./products-delete.page.scss'],
})
export class ProductsDeletePage implements OnInit {
  product_id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data =>{
        this.product_id = data.get('product_id')
      }
    )
  }

  deleteProduct(product_id:any){
    this.productsService.deleteProduct(product_id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/products']);
      }
    )
  }
}

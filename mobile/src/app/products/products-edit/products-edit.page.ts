import { ActivatedRoute , Router} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/_services/products.service';
import { PhotoService } from 'src/app/_services/photo.service';
@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.page.html',
  styleUrls: ['./products-edit.page.scss'],
})
export class ProductsEditPage implements OnInit {
  product_id: any;
  product: any;
  productForm: FormGroup;
  constructor(
    private ProductsService : ProductsService,
    private activatedRoute: ActivatedRoute,
    private FormBuilder: FormBuilder,
    private router: Router,
    private photoService: PhotoService
  ) {
    this.productForm = this.FormBuilder.group({
      product_id: [''],
      product_name: [''],
      stock: [''],
      price: [''],
      category: [''],
      descripcion: [''],
      picture_url: ['']
    })
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.product_id = data.get('product_id');

        this.ProductsService.getProductById(this.product_id).subscribe(
          response =>{
            console.log(response)
            this.product = response;
            this.productForm.patchValue(response);
          },
          error => {
            console.error(error)
          }
        )

      }
    )
  }

  updateProduct(product: any){
   this.ProductsService.updateProduct(this.product_id, product).subscribe(
     response => {
       console.log(response);
       this.router.navigate(['/products']);
      }
      );
    }

    async openCamera() {
      const picture_data = await this.photoService.takePicture();

      this.productForm.patchValue(picture_data);
    }

  }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { ProductsService } from 'src/app/_services/products.service';
import { PhotoService } from 'src/app/_services/photo.service';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.page.html',
  styleUrls: ['./products-create.page.scss'],
})
export class ProductsCreatePage implements OnInit {
  productsForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productsService:ProductsService,
    private router: Router,
    private photoService: PhotoService


  ) {
    this.productsForm = this.formBuilder.group({
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
  }


  addProduct(values:any){
    this.productsService.insertProduct(values).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/products']);

        LocalNotifications.schedule({
          notifications: [
            {
              id: new Date().getTime(),
              title: "New member",
              body: `${values.fullname} is a new member. Don't forget to welcome him`,
              schedule: {
                at: new Date(new Date().getTime() + 10000)
              }
            }
          ]
        })

      },
      error =>{
        console.error(error)
      }
    )
  }
  async openCamera() {
    const picture_data = await this.photoService.takePicture();

    this.productsForm.patchValue(picture_data);
  }
}


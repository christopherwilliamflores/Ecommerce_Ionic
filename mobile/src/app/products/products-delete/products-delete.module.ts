import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsDeletePageRoutingModule } from './products-delete-routing.module';

import { ProductsDeletePage } from './products-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsDeletePageRoutingModule
  ],
  declarations: [ProductsDeletePage]
})
export class ProductsDeletePageModule {}

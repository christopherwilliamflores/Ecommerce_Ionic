import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsEditPageRoutingModule } from './products-edit-routing.module';

import { ProductsEditPage } from './products-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProductsEditPage]
})
export class ProductsEditPageModule {}

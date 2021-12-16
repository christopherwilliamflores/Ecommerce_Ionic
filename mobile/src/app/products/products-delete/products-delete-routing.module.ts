import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsDeletePage } from './products-delete.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsDeletePageRoutingModule {}

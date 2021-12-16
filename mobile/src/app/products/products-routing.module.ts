import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  },
  {
    path: 'view/:product_id',
    loadChildren: () => import('./products-view/products-view.module').then( m => m.ProductsViewPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./products-create/products-create.module').then( m => m.ProductsCreatePageModule)
  },
  {
    path: 'edit/:product_id',
    loadChildren: () => import('./products-edit/products-edit.module').then( m => m.ProductsEditPageModule)
  },
  {
    path: 'delete/:product_id',
    loadChildren: () => import('./products-delete/products-delete.module').then( m => m.ProductsDeletePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}

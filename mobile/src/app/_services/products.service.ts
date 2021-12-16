import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(
    private http: HttpClient
  ){ }

  getProducts(){
    return this.http.get<any>('http://localhost:3000/products');
  }

  getProductById(product_id: any){
    return this.http.get<any>(`http://localhost:3000/products/${product_id}`);
  }

  insertProduct(product:any){
    return this.http.post<any>('http://localhost:3000/products',product);
  }

  updateProduct(product_id : any, product:any){
    return this.http.put<any>(`http://localhost:3000/products/${product_id}`,product);
  }
  deleteProduct(product_id: any){
    return this.http.delete<any>(`http://localhost:3000/products/${product_id}`);
  }

}

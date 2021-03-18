import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl ="https://localhost:44311/api/";


  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl +"products/getall"

    return this.httpClient.get<ListResponseModel<Product>>(newPath)

  }

  getProductByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl +"products/getbyCategory?categoryId="+ categoryId

    return this.httpClient.get<ListResponseModel<Product>>(newPath)

   
  }
}

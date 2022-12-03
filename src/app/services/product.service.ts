import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; 
import { Product } from '../models/product/product';
import { AccessData } from './loginuser.service';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BaseURL ="http://127.0.0.1:8000/products"

  product:Product = new Product;

  constructor(private httpClient:HttpClient) { }

 

  public getProduct(){

    console.log(localStorage.getItem("token"))

    const headerss = new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')}) 

    return this.httpClient.get<Product>(this.BaseURL,{headers:headerss});
  }
}

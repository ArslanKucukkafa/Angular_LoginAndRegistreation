import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; 
import { Product } from '../models/product/product';
import { AccessData } from './loginuser.service';
import { Token } from '@angular/compiler';
import { Pro } from '../components/form/form.component';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private BaseURL ="http://127.0.0.1:8000/api/products"
  private BaseURL1="http://127.0.0.1:8000/api/saveShopingCart"

  product:Product = new Product;

  constructor(private httpClient:HttpClient) { }

 

  public getProduct(){

    console.log(localStorage.getItem("token"))

    const headerss = new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')}) 

    return this.httpClient.get<Product>(this.BaseURL,{headers:headerss});
  }
  
  public setProductCart(body){
    console.log("set product is running")
    const headerss = new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')}) 
    return this.httpClient.post<AccessData>(this.BaseURL1 ,JSON.stringify(body),{headers:headerss});
  }
}

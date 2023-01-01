import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { elementAt } from 'rxjs';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product.service';
import { __values } from 'tslib';

export class Pro{
  name:String;
  id:Number;
  price:Number;
  piece:Number;
  totalPrice:Number;
}

export class schemaProduct {
  token:string
  result:Pro
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {

datas: Array<Pro> = []; 

schema:schemaProduct = new schemaProduct

product:Product = new Product;
get: Number;

  constructor(private productss:ProductService) { 


  }

  ngOnInit(): void {
    this.productList();
  }


  addCart(Id:Number,name:String,price:Number){
    var sayaç1=1
    this.datas.forEach(element =>{if(element["id"]==Id){sayaç1=sayaç1+Number(element.piece)}})
    var pro:Pro ={"name":name,"id":Id,"price":price,"piece":sayaç1,"totalPrice":sayaç1*Number(price)}
    this.datas.forEach(element =>{if(element.id==Id){this.datas.splice(this.datas.lastIndexOf(element),1)}})
    var count =this.datas.push(pro);
    this.datas.forEach(element=>console.log(element,this.datas.length," ",count ))
  }

  productList(){
    this.productss.getProduct().subscribe(data =>{
      this.product=data
    })
  }

  removeDocument(Id:Number){
    this.datas.forEach( (item, index) => {
      if(item.id === Id) this.datas.splice(index,1);
    });
 }

viewShoppingCart(){
  this.viewToken();
  const body ={
    "token":localStorage.getItem("token"),
    "parameter": {      
       "data":this.datas
    }
  }
  this.productss.setProductCart(body)
}

viewToken(){
  const checkbox = document.getElementById(
    'defaultCheck1',
  ) as HTMLInputElement | null;

  if (checkbox?.checked) {
    console.log('Checkbox is checked');
  } else {
    console.log('Checkbox is NOT checked');
  }

}


 emptyArray(){
  this.datas = []; 
 }
}

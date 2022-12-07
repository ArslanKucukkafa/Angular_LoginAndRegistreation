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


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {

datas: Array<Pro> = []; 

fruits: Array<Pro> = []; 



product:Product = new Product;
get: Number;

  constructor(private productss:ProductService) { 


  }

  ngOnInit(): void {
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

 emptyArray(){
  this.datas = []; 
 }


}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

product:Product = new Product;


  constructor(private productss:ProductService) { 

  }

  ngOnInit(): void {
  }

  productList(){
    this.productss.getProduct().subscribe(data =>{
      this.product=data
    })
    console.log(this.product.result[0].productName)
  }

}

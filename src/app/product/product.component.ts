import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product, IProduct } from '../model/product';
import * as CryptoJS from 'crypto-js'; 


@Component({

  selector: 'app-product',

  templateUrl: '/product.component.html',

  styleUrls: ['./product.component.css'],

  providers: [ProductService]

})
export class ProductComponent implements OnInit {

  private service: ProductService;
  products:Array<IProduct> = [];
  newProduct: IProduct = new Product();
  oldProduct: IProduct = new Product();
  editing = false;

  constructor(service: ProductService) {
    this.service = service;
  }

  ngOnInit() {
   
  }

  async addProduct() {
    try {
      const addedProducts = await this.service.addProduct(this.newProduct) as IProduct[];
         console.log(addedProducts);
      if (addedProducts.length > 0) {
        this.products.push(addedProducts[0]);
        this.newProduct.name='';
        this.newProduct.price='';
        alert('Successfully added');
      }
    
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
 
  }

  }

  

  

  

